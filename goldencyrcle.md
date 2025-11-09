# 📸 PLOC, The Geolocation-Based Social Network

## 💡 The Concept
PLOC is a unique social media app that transforms the experience of **physically visiting a location** into a moment of **social discovery**. Users can only see their friends' photos (the "memories") by going to the exact spot where they were taken.

---

## ✨ The PLOC Golden Circle

### Why? (The Mission)
* **Add Emotion to Places:** Inject a dimension of surprise, nostalgia, and personal connection to visiting a specific spot.
* **"Visit" Memories in Real-Time:** Allow users to see the moments their friends experienced right at that location.
* **People will think to ploc:** those this place deserve to leave some memories?
* **Young people doesn't find what they need on current social apps**
* **exploring a new way of exploring social media**
* **A SIMPLE WAY OF COMUNICATE MEMORY**

### How? (The Value Proposition)
* **Create Unique Geo-Locked Memories:** Transform a static photo into an immersive **"Personal Geolocation-Based Vlog"**.
* Develop a mobile app that uses **precise geolocation** to unlock content.
* Photos/memories are **invisible** on the main feed and are only revealed when the user is within a **defined proximity zone** of the original capture point.
* Each location becomes a **memory point** that users can "collect" by visiting it.

### What? (The Product)
| Component | Technology | Role |
| :--- | :--- | :--- |
| **Mobile Frontend** | **React Native** | Cross-platform UI development, management of the interactive map, and the photo unlocking user experience. |
| **Backend (API)** | **FastAPI (Python)** | Handling server logic, user authentication, and rapid processing of geolocation requests. |
| **Database** | **Firebase** | Secure storage of user data, photo metadata (including geolocation), and scalability management. |

---
## Buisness
### 💡 The Core Opportunity
PLOC transforms the social experience from passive consumption (feeds) to **active physical discovery** and **collection**. This novelty creates a unique value proposition for both users (authentic memory discovery) and businesses (guaranteed foot traffic).

---

### 📊 Market & Analogous App Analysis (The "Stats")

Since PLOC is a category creator, its business model is validated by three types of analogous apps:

#### 1. The "Gamified Location" Apps (Proving User Motivation)
| App | Key Insight | Supporting Stat | Lesson for PLOC |
| :--- | :--- | :--- | :--- |
| **Pokémon Go** | Users *will* physically travel for digital rewards. | Generated **$545M in revenue** in 2024 and maintained **55M active players** in 2023. | The "memory collection" feature is a powerful gamification loop that drives **physical engagement**. |
| **Geocaching** | Niche communities thrive on location-based treasure hunting. | Millions of active users worldwide focused purely on the location-based 'hunt.' | The "collection" aspect provides **intrinsic motivation** beyond the social layer. |

#### 2. The "Niche & Authentic" Social Apps (Proving Market Demand)
| App | Key Insight | Supporting Stat | Lesson for PLOC |
| :--- | :--- | :--- | :--- |
| **BeReal** | Market demand for social experiences that break the "performative feed" model. | Grew to over **23M Daily Active Users** by focusing on time-based authenticity. | PLOC is the **location-based version of BeReal's authenticity**; the hook is *place*, not time. |
| **Snapchat (Snap Maps)** | Location sharing is a core component of friend-centric social interactions. | Over **800M Monthly Active Users** sustained by ephemeral and friend-focused features. | Focus on **privacy and small social graphs** is essential for location-based adoption. |

#### 3. The "Location Sharing" Hurdles (Proving Feasibility)
| Key Hurdle | Supporting Stat | Conclusion |
| :--- | :--- | :--- |
| **Location Data Sharing** | **62% of Americans share their location** with friends or family (primarily for safety/coordination). | Location sharing is **normalized**, especially among the key Gen Z demographic. |
| **User Trust** | **58% of consumers are more willing to share data** than two years ago *if* they feel they are in control and receive tangible value. | **Trust and control** must be paramount. Features like "private accounts" and "best friends" are essential. |

---
### spending
#### people
* No need we are the builders and CEO
### infrastructure
* 200$/month for 10 000 users with firebase
### 💰 Monetization Strategies

#### Strategy 1: B2B - Sponsored Locations (**Core Revenue Driver**)
* **Seling the data:** anonimised data and sell it to company
=> ARPU 0,05  for 10 000 users 500/month
=> for 1 000 000 000 users => 10 000 / month

#### Strategy 2: B2C - Freemium (The "PLOC+" Subscription)
* remembering memory for the last 15 years.
---

### 📈 Key Performance Indicators (KPIs)

These metrics will track the health and success of the PLOC ecosystem:

#### 1. Activation (The "Magic Moment")
* **Time to First Unlock:** The median time (in hours/days) from signup to the first memory being unlocked. (Goal: < 24 hours)
* **Time to First Creation:** The median time from signup to a user posting their first geo-locked memory.

#### 2. Engagement (The "Stickiness")
* **Memory Creation Rate (MCR):** Average number of memories posted per user per week (Content **Supply**).
* **Memory Unlock Rate (MUR):** Average number of memories unlocked per user per week (Content **Demand**).
* **Chain Creation %:** The percentage of memory unlocks that result in the user taking and posting a photo in response (Measures the core feature loop).
* **DAU/MAU Ratio:** Measures how habitual the app is for its user base.

#### 3. Monetization
* **Sponsor Conversion Rate:** Percentage of local businesses pitched that convert to a paid sponsored location.
* **CPV Success Rate:** Total revenue generated from sponsored locations divided by the total number of physical unlocks/visits.

---

### 🚧 Critical Business Challenges & Go-to-Market Strategy

#### 1. The "Cold Start" Problem (Empty Map)
If a new user sees an empty map, they churn immediately.
* **Solution:** **Seed the Map.** Launch with pre-populated, interesting **"Public PLOCs"** (e.g., historical facts, local art, "Welcome to PLOC" messages) so every user has *something* to discover on Day 1, regardless of their friend count.

#### 2. Lack of Geographic Density
The app is useless if friends are not in the same physical area.
* **Solution: Focused Go-to-Market (GTM) Strategy.**
    * **Target:** A large, dense **College Campus** or specific metropolitan neighborhood.
    * **Why:** Geographically contained, high social density, perfect target demographic, and strong word-of-mouth potential.

#### 3. Privacy & Safety
Location data requires maximum user trust and control.
* **Solution:** Simple, highly visible privacy controls.
    * **"Fuzzy Location" Posting:** Allow users to post a memory to a general area (e.g., a 10-meter radius) instead of an exact GPS coordinate for peace of mind.
    * **Audience Control:** Ensure per-post sharing options (e.g., Public, Friends, Best Friends) are intuitive.
#### 📝 Notes & Reminders
* **Conceptual Reference:** Inspired by Simon Sinek's "Golden Circle."
* **Main Technical Challenge:** Ensuring **reliable geolocation accuracy** while optimizing battery life.
* **Key Differentiator:** Unlike other social networks focused on *posting*, PLOC focuses on *physical discovery* and *collection*.
### contiuous Text Presentation
---
### Features
#### essentials features
* see you friends pictures when you are in a place
* you can add friends
* private/public accounts
* picture chain see a pic -> take a pic
* temporary pics (your friends can only see them once)
* personal blog (private): safe private place where all your pics are saved for your souvenirs.
* sponsorised places (to figure out)
* tagging people
* best friends
---

PLOC introduces a unique concept to the social media landscape, transforming the simple act of visiting a location into a powerful moment of social discovery. At its core, PLOC is a geolocation-based app where "memories"—photos and moments shared by friends—remain locked and invisible. They can only be revealed and experienced when a user physically travels to the exact spot where the original content was captured.

PLOC's mission is to add a deep layer of emotion and personal connection to physical spaces. Instead of a passive feed, PLOC aims to create unique, geo-locked memories, turning a static photo into an immersive "Personal Geolocation-Based Vlog." The goal is to inject a sense of surprise, nostalgia, and connection into every visit, allowing users to discover in real-time the moments their friends experienced right where they stand.

This experience is driven by a strong value proposition: the app uses precise geolocation to unlock content. Photos and memories are not available on a traditional feed; they remain hidden until the user enters a defined proximity zone of the original capture point. This mechanism fundamentally changes the user's interaction with content, shifting the focus from passive posting to active physical discovery and collection. Each location becomes a memory point to be collected.

To bring this vision to life, PLOC will be built on a modern, scalable tech stack. The cross-platform mobile interface, including the interactive map and the photo-unlocking experience, will be developed using React Native. The backend logic, user authentication, and rapid processing of geolocation requests will be handled by a FastAPI (Python) API. Firebase will serve as the robust database solution, securely managing user data and the critical metadata of each geo-locked memory.

While the team anticipates technical challenges, such as balancing geolocation accuracy with battery optimization, the core concept remains the key differentiator. Unlike traditional social networks focused on posting and passive consumption, PLOC is fundamentally about physical discovery, collection, and experiencing the world through the memories of friends.
