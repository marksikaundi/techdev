# Restructured Layout

This project has been restructured to have the following layout organization:

1. **Root Layout (`app/layout.tsx`)** - Contains only the basic HTML structure, font settings, and providers.

2. **Main Layout (`app/(main)/layout.tsx`)** - Contains the header and footer and wraps all non-admin pages.

3. **Admin Layout (`app/admin/layout.tsx`)** - The admin layout with its own sidebar and structure.

## Completed Changes

- Created a route group called `(main)` to group all non-admin pages
- Moved the following pages to the `(main)` group:
  - `app/(main)/page.tsx`
  - `app/(main)/about/page.tsx`
  - `app/(main)/blog/page.tsx`
  - `app/(main)/blog/[id]/page.tsx`
  - `app/(main)/resources/page.tsx`
  - `app/(main)/contact/page.tsx`
- Updated the root layout to remove the Header and Footer

## Next Steps

To complete this migration, you should:

1. Delete the original pages that were moved to the (main) group:
   - `app/page.tsx`
   - `app/about/page.tsx`
   - `app/blog/page.tsx`
   - `app/blog/[id]/page.tsx`
   - `app/resources/page.tsx`
   - `app/contact/page.tsx`

2. If there are any additional non-admin pages not covered in this initial migration, move them to the (main) group as well.

This structure ensures that:
- The Header and Footer components only appear on non-admin pages
- The admin pages have their own dedicated layout without the main site Header and Footer
