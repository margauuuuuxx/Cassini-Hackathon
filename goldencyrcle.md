# 📸 PLOC Overview: The Geolocation-Based Social Network

## 💡 The Concept
PLOC is a unique social media app that transforms the experience of **physically visiting a location** into a moment of **social discovery**. Users can only see their friends' photos (the "memories") by going to the exact spot where they were taken.

---

## ✨ The PLOC Golden Circle

### Why? (The Mission)
* **Create Unique Geo-Locked Memories:** Transform a static photo into an immersive **"Personal Geolocation-Based Vlog"**.
* **Add Emotion to Places:** Inject a dimension of surprise, nostalgia, and personal connection to visiting a specific spot.
* **"Visit" Memories in Real-Time:** Allow users to see the moments their friends experienced right at that location.

### How? (The Value Proposition)
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

### 📝 Notes & Reminders
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