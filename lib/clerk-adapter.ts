"use server";

import { UserResource } from "@clerk/types";
import { User } from "@clerk/nextjs/server";

// Extended user resource with additional functionality and methods
export interface ExtendedUserResource extends UserResource {
  // Pre-computed values (stored as properties to help with serialization)
  _fullName: string;
  _initials: string;
  _displayName: string;
  _primaryEmail: string;
  _bio: string;
  _website: string;
  _avatarUrl: string;
  
  // Helper methods that return pre-computed values
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
  
  // Serialize the email addresses to plain objects
  const serializedEmailAddresses = user.emailAddresses?.map(email => ({
    id: email.id,
    emailAddress: email.emailAddress,
    verification: email.verification ? {
      status: email.verification.status,
      strategy: email.verification.strategy,
    } : null,
    linkedTo: Array.isArray(email.linkedTo) ? 
      email.linkedTo.map(link => ({ id: link.id, type: link.type })) : []
  })) || [];
  
  // Create a compatible UserResource object with all the properties needed by our components
  const userResource = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl,
    emailAddresses: serializedEmailAddresses,
    publicMetadata: user.publicMetadata ? { ...user.publicMetadata } : {},
    primaryEmailAddressId: user.primaryEmailAddressId,
    username: user.username,
    primaryPhoneNumberId: user.primaryPhoneNumberId,
    
    // Add stub methods and properties to satisfy the UserResource interface
    update: async () => ({ ...userResource }),
    delete: async () => ({}),
    reload: async () => userResource,
    
    // Serialize complex arrays to simple objects
    organizationMemberships: [],
    phoneNumbers: user.phoneNumbers?.map(phone => ({
      id: phone.id,
      phoneNumber: phone.phoneNumber,
      verification: phone.verification ? {
        status: phone.verification.status,
        strategy: phone.verification.strategy,
      } : null,
    })) || [],
    externalAccounts: user.externalAccounts?.map(account => ({
      id: account.id,
      provider: account.provider,
    })) || [],
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
  const safeUserResource = {
    ...userResource,
    // Ensure timestamps are numbers, not Date objects
    createdAt: typeof user.createdAt === 'number' ? user.createdAt : Date.now(),
    updatedAt: typeof user.updatedAt === 'number' ? user.updatedAt : Date.now(),
    lastSignInAt: typeof user.lastSignInAt === 'number' ? user.lastSignInAt : Date.now(),
  };
  
  return safeUserResource as unknown as UserResource;
}

// Enhanced adapter that adds additional functionality to the user resource
export async function adaptUserToExtendedResource(user: User): Promise<ExtendedUserResource> {
  // First get the basic UserResource
  const baseResource = await adaptUserToResource(user);
  
  // Pre-calculate values to avoid methods in the final object
  const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Anonymous User';
  const initials = !user.firstName && !user.lastName ? 'U' : 
    `${(user.firstName?.[0] || '')}${(user.lastName?.[0] || '')}`.toUpperCase();
  const displayName = user.username || fullName;
  
  // Find primary email
  const primaryEmail = user.emailAddresses?.find(email => 
    email.id === user.primaryEmailAddressId
  )?.emailAddress || '';
  
  // Get bio and website
  const bio = (user.publicMetadata?.bio as string) || '';
  const website = (user.publicMetadata?.website as string) || '';
  
  // Get avatar URL
  const avatarUrl = user.imageUrl || 
    `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=random`;
  
  // Then create a plain object with pre-computed values
  const extendedResource = {
    ...baseResource,
    
    // Replace methods with pre-computed values
    _fullName: fullName,
    _initials: initials,
    _displayName: displayName,
    _primaryEmail: primaryEmail,
    _bio: bio,
    _website: website,
    _avatarUrl: avatarUrl,
    
    // Add helper methods that use the pre-computed values
    getFullName: function() { return this._fullName; },
    getInitials: function() { return this._initials; },
    getDisplayName: function() { return this._displayName; },
    getPrimaryEmail: function() { return this._primaryEmail; },
    getBio: function() { return this._bio; },
    getWebsite: function() { return this._website; },
    getAvatarUrl: function() { return this._avatarUrl; },
    
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
