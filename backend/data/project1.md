# Project1_NOMNOM
NOMNOM addresses a common frustration in the restaurant industry: outdated or incomplete menu information on existing platforms, which leads to user dissatisfaction and missed opportunities for restaurants.

To solve this, we developed an AI-powered mobile application that revolutionizes menu discovery. Our approach leverages image-to-text conversion using Google Cloud Vision API and Gemini AI, enabling a dish-centric search across multiple restaurants. We encourage user-generated content to keep information current and provide tools for restaurant owners to verify and update their menu details.

**The result:**
an MVP that achieved 90% accuracy in menu text extraction
largely enhanced the accessibility of menu, garnered highly positive feedback in beta testing
enabled faster menu discovery compared to traditional methods.

This project not only delivered a useful product but also showcased our team's ability to innovate and execute under constraints, setting a strong foundation for future enhancements and scalability in the restaurant tech space.
### Problem Statement:
Existing platforms like Google Maps, TripAdvisor, and OpenTable often provide outdated or incomplete menu information for restaurants. This is primarily due to their reliance on restaurant staff to update digital information, a task often overlooked in busy restaurant operations.

Users frequently encounter unclear, outdated menu pictures or broken website links when trying to access menu details. This gap in accurate, accessible menu information creates frustration for diners and missed opportunities for restaurants.
### Objectives:
Design and develop a method to ensure up-to-date restaurant menu information.
Create an accessible interface for users to view and interact with menu data.
Implement a system that incentivises users to upload and contribute menu information.
Build a mobile application that demonstrates these core functionalities.
### Research:
Our research process for NOMNOM involved both quantitative and qualitative methods to gather insights and validate our concept:
#### User Survey
We conducted a survey to understand user priorities when choosing a restaurant. The results revealed that **price, cuisine**, and **menu** were the three main concerns for potential users. We also found the user likes to discovery restaurant and foods on social media, implied that they have strong demand of food content.
#### Competitor Analysis
We analysed several existing apps and platforms providing restaurant information and menu details, including:
* Google Maps: Focused on location-based services, reviews, and basic information.
* OpenTable: Specialized in restaurant reservations and reviews. They provided text-based menu for some of the restaurants, but the data was managed by restaurants themselves.
* TripAdvisor: Focused on travel-related use case, provided reviews and recommendations.
* Social Media (Instagram/TikTok): Offered user-generated content and visual appeal.

This analysis help us identify gaps in menu interaction and design features for differentiation.
#### Restaurant Owner Interviews
We reached out to 3 local restaurant owners for interviews to understand their perspective. Here are the key insights:
* *Platform Preferences*: OpenTable is popular among locals for its booking and review features. Google is crucial for attracting tourists and new customers. Instagram is heavily used for restaurant marketing.
* *Feedback Monitoring*: Mainly use Google for checking customer ratings and reviews.
* *Menu Updates*: Typically update menus every six months, with special menus for holidays.
* *App Features Interest*: The interviewee expressed interest in features like individual dish ratings, they think it could help them to optimise their menu.
* *Marketing Potential*: The restaurant owner showed interest in promoting their business on NOMNOM, because of the low maintenance effort and dish-level user data.
### Stakeholders:
The key stakeholders for NOMNOM includes:
* **End Users**: Food enthusiasts, tourists, busy professionals, local residents looking for dining options, and tourists who want to explore the best local dishes. We focused on catering to those looking to explore the best local dishes and make informed dining decisions.
* **Restaurant Owners**: Potential business partners who could be benefited from increased visibility and customer engagement. Our interviews revealed their interest in the app's promotional potential, highlighting a mutually beneficial relationship.
* **Team Members**: ****The project was developed by a diverse team of six master's students, each bringing unique skills to the table. This included myself as project manager, product designer, and frontend developer, alongside another designer, an additional frontend developer, and three backend developers.
* **Supervisor**: Professor Mads Haahr provided ongoing guidance through weekly meetings, where we reported progress and discussed challenges, ensuring the project remained on track and adhere the academical requirements.
* **External Mentors**: Recognizing the comprehensive nature of NOMNOM, we sought specialized guidance from Trinity College Dublin faculty:
  * Dr. Nina Bresnihan for UIUX review
  * Dr. Glenn Strong for development process management and tech stack advice
  * Dr. Murala for insights on extracting data from images
* **Technology Partners**: We leveraged key technologies and APIs to power NOMNOM's features:
  * Google Cloud Platform for the Gemini API and Google Maps API
  * TripAdvisor API for collecting foundational restaurant data

### Ideation and Prototype:
Centred with the idea of transforming user uploaded data to text-based menu interface, we explore how could we maximise the use of menu database. Through team discussions and an idea pool document, we refined our concept and selected the key features in MVP.

Throughout the design and development process, we continually sought to provide unique value. This led us to pivot from a restaurant-centric approach to a menu-centric one. This approach led to the development of our unique selling points, shaped feature set and user interface design:
Dual View: Toggle between restaurant and dish views. Browse by venue or explore individual dishes across multiple restaurants.
Dish-Specific Searching: Search for specific dishes rather than just restaurants. NOMNOM ranks dish searching results by ratings, helping you find the best version of your craving.
“Tender” for Surprise: Can't decide? Let NOMNOM choose for you. Get a random restaurant or dish recommendation to spice up your dining routine.
Accurate Reference for the Price: We provides real-time calculation for the average main dish price of the restaurants, showing them alongside with the restaurant information.

This menu-centric approach shaped our feature set and user interface design, defining NOMNOM's unique position in the food discovery app landscape.
### Development:
To achieve the goal of extracting menu information from images, we initially considered OCR. However, after experimenting, we discovered that the extracted information was disorganized.
This challenge led us to explore Large Language Models (LLMs). We integrated the Gemini API into our system, tasking it with not only reading the menu information but also organizing it according to our database schema.

This AI-powered approach allows us to acquire menu data efficiently, so that we can build a dish-centric experience on top of it.

Besides Gemini API, we are using React Native for the frontend to ensure a seamless cross-platform availability with limited development time. We are using Google Maps Platform to provide in-app location searching, and TripAdvisor API provide us basic restaurant data. We chose to use Node.js to create a efficient backend, and MongoDB gives us the flexibility to handle our complex data structures, while AWS ensure we can scale as our app grows.
### Outcomes and Reflections:
NOMNOM's development yielded impressive results across several key areas:
**Project Objective Completion:**
* We successfully implemented our feature design to address the outdated menu problem, a core issue we set out to solve.
* Our team delivered a fully functional Minimum Viable Product (MVP) that included all planned core features in two months time frame.
* Despite being new to many of the technologies used, we successfully integrated complex systems including Gemini AI, Google Maps, and MongoDB, demonstrating our ability to quickly adapt and learn.

⠀**Academic Achievement:**
* The project received a grade of 75/100 (first class). This score is assessed by 8 examiners.

⠀**Showcase Success:**
* NOMNOM stood out at the showcase, recognized for having the highest level of completion among all presented projects.
* The demo attracted significant interest, with over 50 people interacting with the application.
* User feedback was positive, with more than 80% of comments praising the menu feature and the innovative "tender" function.

**Some comments from our feedback survey:**
*Great! It was easy to use and navigate through given the clear call to actions. Overall great user experience and is definitely an app that I would use. — Kenneth John Ras*
*It was a new and exciting concept and a spin on an already successful form of ordering/ finding new foods. If you’re ever looking to an investor I’m in! — Mariam Asiyanbi*
*Amazing concept, love the swipe feature and easy option for uploading the menu. Having a maps function is great also. — Michaela R.*
**Potential Impact:**
* The project's real-world potential was acknowledged by industry professionals, including a tech entrepreneur and a representative from Booking, who recognized NOMNOM's business potential.

These outcomes not only validate our initial concept but also highlight the effectiveness of our development approach. The project's success in both academic and practical domains underscores its innovative nature and potential for addressing real-world challenges in the restaurant discovery space.

This experience has provided invaluable insights into the full lifecycle of app development, from conception to public presentation, preparing us well for future endeavors in the tech industry.
