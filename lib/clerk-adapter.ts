"use server";

import { UserResource } from "@clerk/types";
import { User } from "@clerk/nextjs/server";

// Extended user resource with additional functionality and methods
export interface ExtendedUserResource extends UserResource {
  // Add additional helper methods and properties
  getFullName(): string;
  getInitials(): string;
  getDisplayName(): string;
  getPrimaryEmail(): string;
  getBio(): string;
  getWebsite(): string;
  getAvatarUrl(): string;
  
  // Add fields for UI-specific functionality
  isAdmin: boolean;
  preferences: {
    theme: string;
    notifications: boolean;
    newsletterFrequency: string;
  };
}

// This adapter function converts the CurrentUser type from @clerk/nextjs/server
// to a compatible UserResource type from @clerk/types
export async function adaptUserToResource(user: User): Promise<UserResource> {
  if (!user) return null as unknown as UserResource;
  
  // Create a compatible UserResource object with all the properties needed by our components
  const userResource = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl,
    emailAddresses: user.emailAddresses || [],
    publicMetadata: user.publicMetadata || {},
    primaryEmailAddressId: user.primaryEmailAddressId,
    username: user.username,
    primaryPhoneNumberId: user.primaryPhoneNumberId,
    
    // Add stub methods and properties to satisfy the UserResource interface
    update: async () => ({ ...userResource }),
    delete: async () => ({}),
    reload: async () => userResource,
    
    // Add stub arrays for collections
    organizationMemberships: [],
    phoneNumbers: [],
    externalAccounts: [],
    samlAccounts: [],
    verifications: {},
    passwordEnabled: true,
    totpEnabled: false,
    backupCodeEnabled: false,
    twoFactorEnabled: false,
    banned: false,
    
    // Extra properties needed by UserResource interface
    createdAt: user.createdAt || new Date().getTime(),
    updatedAt: user.updatedAt || new Date().getTime(),
    lastSignInAt: user.lastSignInAt || new Date().getTime(),
    
    // Stub collections and other required properties
    enterpriseAccounts: [],
    passkeys: [],
    web3Wallets: []
  };
  
  // Use type assertion to convert to UserResource
  return userResource as unknown as UserResource;
}

// Enhanced adapter that adds additional functionality to the user resource
export async function adaptUserToExtendedResource(user: User): Promise<ExtendedUserResource> {
  // First get the basic UserResource
  const baseResource = await adaptUserToResource(user);
  
  // Then extend it with additional methods and properties
  const extendedResource = {
    ...baseResource,
    
    // Add helper methods
    getFullName: function() {
      return `${this.firstName || ''} ${this.lastName || ''}`.trim() || 'Anonymous User';
    },
    
    getInitials: function() {
      if (!this.firstName && !this.lastName) return 'U';
      return `${(this.firstName?.[0] || '')}${(this.lastName?.[0] || '')}`.toUpperCase();
    },
    
    getDisplayName: function() {
      return this.username || this.getFullName();
    },
    
    getPrimaryEmail: function() {
      const primaryEmail = this.emailAddresses.find(email => 
        email.id === this.primaryEmailAddressId
      );
      return primaryEmail?.emailAddress || '';
    },
    
    getBio: function() {
      return (this.publicMetadata?.bio as string) || '';
    },
    
    getWebsite: function() {
      return (this.publicMetadata?.website as string) || '';
    },
    
    getAvatarUrl: function() {
      return this.imageUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(this.getFullName())}&background=random`;
    },
    
    // Add extended properties
    isAdmin: (user.publicMetadata?.role as string) === 'admin',
    
    preferences: {
      theme: (user.publicMetadata?.theme as string) || 'system',
      notifications: (user.publicMetadata?.notificationsEnabled as boolean) || true,
      newsletterFrequency: (user.publicMetadata?.newsletterFrequency as string) || 'weekly'
    }
  };
  
  // Use type assertion to convert to ExtendedUserResource
  return extendedResource as unknown as ExtendedUserResource;
}
