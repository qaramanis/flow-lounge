# Newsletter & Membership System Architecture

## Overview
This document outlines the architecture for Flow Lounge's newsletter subscription and membership system.

## System Components

### 1. Newsletter System
**Purpose:** Allow users to subscribe to announcements about events and special offers.

**Features:**
- Email subscription form
- Automatic email notifications for events/offers
- Unsubscribe functionality
- Subscriber management

**User Flow:**
1. User enters email on community page
2. System validates email format
3. Email stored in database with subscription status
4. Confirmation email sent to user
5. User receives future newsletters about events/offers

---

### 2. Membership System
**Purpose:** Paid membership with lifetime benefits.

**Features:**
- One-time payment of €10
- Automatic newsletter subscription (no opt-out needed)
- Permanent 5% discount on all purchases
- Unique discount code generation per member
- Member status tracking

**User Flow:**
1. User clicks "Become a Member" on community page
2. User fills out form (name, email, phone - optional)
3. User proceeds to payment (Stripe checkout)
4. Payment processed (€10 one-time)
5. On success:
   - Member record created in database
   - Unique 5% discount code generated
   - Member automatically added to newsletter
   - Confirmation email sent with discount code
6. Member can use discount code at checkout forever

---

## Database Schema

### Subscribers Table
```sql
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  status ENUM('active', 'unsubscribed') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Members Table
```sql
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  phone VARCHAR(50),
  discount_code VARCHAR(50) UNIQUE NOT NULL,
  payment_id VARCHAR(255) UNIQUE NOT NULL, -- Stripe payment intent ID
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Newsletters Table
```sql
CREATE TABLE newsletters (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  subject VARCHAR(500) NOT NULL,
  content TEXT NOT NULL,
  type ENUM('event', 'offer', 'general') NOT NULL,
  sent_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  recipient_count INTEGER DEFAULT 0
);
```

---

## API Endpoints

### Newsletter Endpoints

#### POST /api/newsletter/subscribe
Subscribe to newsletter (free)
```json
Request:
{
  "email": "user@example.com"
}

Response:
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

#### POST /api/newsletter/unsubscribe
Unsubscribe from newsletter
```json
Request:
{
  "email": "user@example.com"
}

Response:
{
  "success": true,
  "message": "Successfully unsubscribed"
}
```

#### POST /api/newsletter/send (Admin only)
Send newsletter to all subscribers and members
```json
Request:
{
  "subject": "New Event Announcement",
  "content": "<html>...</html>",
  "type": "event"
}

Response:
{
  "success": true,
  "recipientCount": 250,
  "message": "Newsletter sent successfully"
}
```

---

### Membership Endpoints

#### POST /api/membership/create-checkout
Create Stripe checkout session
```json
Request:
{
  "email": "user@example.com",
  "name": "John Doe",
  "phone": "+30 123456789"
}

Response:
{
  "checkoutUrl": "https://checkout.stripe.com/...",
  "sessionId": "cs_test_..."
}
```

#### POST /api/membership/webhook (Stripe webhook)
Handle payment confirmation
```json
Stripe Event:
{
  "type": "checkout.session.completed",
  "data": {
    "object": {
      "payment_intent": "pi_...",
      "customer_email": "user@example.com",
      "metadata": {
        "name": "John Doe",
        "phone": "+30 123456789"
      }
    }
  }
}

Actions:
1. Create member record
2. Generate unique discount code (format: FL-XXXXX)
3. Add member to newsletter automatically
4. Send confirmation email with discount code
```

#### GET /api/membership/verify
Verify membership status by email
```json
Request Query:
?email=user@example.com

Response:
{
  "isMember": true,
  "discountCode": "FL-A1B2C",
  "memberSince": "2025-10-16T10:00:00Z"
}
```

---

## Email Templates

### 1. Newsletter Subscription Confirmation
**Subject:** Welcome to Flow Lounge Newsletter

**Content:**
- Welcome message
- What to expect (events, offers)
- Unsubscribe link
- Flow Lounge branding

### 2. Membership Confirmation
**Subject:** Welcome to Flow Lounge Membership!

**Content:**
- Thank you message
- Discount code (prominent)
- How to use discount
- Membership benefits
- Automatic newsletter subscription notice
- Contact information

### 3. Newsletter Announcement
**Subject:** [Dynamic - Event or Offer Title]

**Content:**
- Announcement details
- Call to action
- Unsubscribe link
- Flow Lounge branding

---

## Discount Code Generation

### Format: `FL-XXXXX`
- FL = Flow Lounge prefix
- XXXXX = 5 random alphanumeric characters (uppercase)

### Algorithm:
```javascript
function generateDiscountCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Exclude confusing chars
  let code = 'FL-';
  for (let i = 0; i < 5; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}
```

### Validation:
- Check uniqueness in database
- If duplicate, regenerate
- Store with member record

---

## E-commerce Integration

### Shopify Integration
```javascript
// Create discount code via Shopify Admin API
POST /admin/api/2024-01/price_rules.json
{
  "price_rule": {
    "title": "Member Discount - FL-XXXXX",
    "target_type": "line_item",
    "target_selection": "all",
    "allocation_method": "across",
    "value_type": "percentage",
    "value": "-5.0",
    "customer_selection": "all",
    "starts_at": "2025-10-16T00:00:00Z"
  }
}
```

### Custom Checkout
```javascript
// Apply discount in checkout calculation
function applyMemberDiscount(cart, discountCode) {
  if (validateDiscountCode(discountCode)) {
    const discount = cart.subtotal * 0.05;
    return {
      subtotal: cart.subtotal,
      discount: discount,
      total: cart.subtotal - discount
    };
  }
}
```

---

## Security Considerations

### 1. Email Validation
- Server-side validation
- Prevent duplicate subscriptions
- Rate limiting on subscription endpoint

### 2. Payment Security
- Use Stripe's secure checkout
- Never store credit card info
- Verify webhook signatures
- Use HTTPS only

### 3. Discount Code Security
- Unique codes per member
- Cannot be shared/reused by non-members
- Tied to email address
- Validate on every checkout

### 4. Admin Endpoints
- Authentication required
- Role-based access control
- Audit logging for newsletter sends

---

## Monitoring & Analytics

### Key Metrics
- Total subscribers (newsletter only)
- Total members (paid)
- Newsletter open rate
- Newsletter click-through rate
- Membership conversion rate
- Discount code usage rate
- Revenue from memberships

### Tools
- Resend analytics for emails
- Stripe dashboard for payments
- Custom database queries for business metrics

---

## Future Enhancements

### Phase 2
- Member-only content area
- Event calendar with member early access
- Member profile dashboard
- Referral program (get €5 credit per referral)

### Phase 3
- Mobile app notifications
- SMS notifications for events
- Tiered membership (Bronze/Silver/Gold)
- Member exclusive events

---

## Technical Stack

### Current
- **Frontend:** Next.js 15.5.3, React 19, TailwindCSS
- **Email:** Resend
- **Hosting:** Vercel

### To Be Added
- **Database:** Vercel Postgres + Prisma (recommended)
- **Payments:** Stripe
- **Authentication:** NextAuth.js (for admin)

---

## Implementation Timeline

### Phase 1: Frontend (Current)
- ✅ Newsletter subscription UI
- ✅ Membership signup UI
- ✅ Component architecture

### Phase 2: Backend (Next)
- Database setup
- Newsletter API endpoints
- Email templates

### Phase 3: Payments (Next)
- Stripe integration
- Membership checkout flow
- Discount code generation

### Phase 4: Integration (Next)
- Connect to e-commerce platform
- Admin dashboard
- Testing & deployment

---

## Cost Estimation

### Monthly Operational Costs
- **Database (Vercel Postgres):** €0-20/month (hobby tier free)
- **Email (Resend):** €0-20/month (free tier: 3000 emails/month)
- **Stripe Fees:** 1.4% + €0.25 per transaction (€10 membership = €0.39 fee)
- **Hosting (Vercel):** €0/month (hobby tier)

**Estimated:** €0-40/month depending on volume

### Revenue Projection
- 100 members/month × €10 = €1,000/month
- Stripe fees: €39
- **Net revenue:** €961/month

---

## Support & Maintenance

### Customer Support
- Email: info@flowlounge.gr
- Newsletter unsubscribe: Automated link
- Discount code issues: Manual verification via email

### System Maintenance
- Database backups: Daily
- Email deliverability monitoring: Weekly
- Stripe webhook health checks: Daily
- Discount code audit: Monthly
