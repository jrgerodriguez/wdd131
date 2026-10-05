const categories = [
    { id: "beach", name: "Beaches" },
    { id: "mountain", name: "Mountains" },
    { id: "lake", name: "Lakes" },
    { id: "cultural", name: "Cultural Places" }
];

const activityNames = {
    surfing: "Surfing",
    swimming: "Swimming",
    hiking: "Hiking",
    camping: "Camping",
    nature: "Nature",
    history: "History",
    food: "Local Food",
    relaxing: "Relaxing"
};

const destinations = [
    {
        name: "El Tunco",
        category: "beach",
        location: "La Libertad",
        description: "A popular surf town named after the big rock on the shore that looks like a pig (tunco in Spanish). It is known for its waves, sunsets, and restaurants by the sea.",
        activities: ["surfing", "swimming", "food"],
        image: "images/el-tunco.webp",
        alt: "Rock formation on El Tunco beach at sunset"
    },
    {
        name: "El Zonte",
        category: "beach",
        location: "La Libertad",
        description: "A quiet beach town with black volcanic sand and steady waves. It is a good place to learn how to surf or to relax away from the crowds.",
        activities: ["surfing", "swimming", "relaxing"],
        image: "images/el-zonte.webp",
        alt: "Palm trees and a calm stream at El Zonte beach"
    },
    {
        name: "El Cuco",
        category: "beach",
        location: "San Miguel",
        description: "A wide and calm beach in eastern El Salvador. Its long shoreline is perfect for walking, swimming, and spending the day with family.",
        activities: ["swimming", "relaxing", "food"],
        image: "images/el-cuco.webp",
        alt: "Wide sandy beach at El Cuco with calm water"
    },
    {
        name: "Santa Ana Volcano",
        category: "mountain",
        location: "Santa Ana",
        description: "The highest volcano in El Salvador at 2,381 meters. A guided hike from Cerro Verde National Park takes you to the crater, where you can see a green lagoon.",
        activities: ["hiking", "nature"],
        image: "images/santa-ana-volcano.webp",
        alt: "Aerial view of Santa Ana Volcano above the clouds"
    },
    {
        name: "El Pital",
        category: "mountain",
        location: "Chalatenango",
        description: "The highest point in El Salvador at 2,730 meters. Its pine forests and cool weather make it a favorite place for camping.",
        activities: ["hiking", "camping", "nature"],
        image: "images/el-pital.webp",
        alt: "Visitors and tents on El Pital covered with frost"
    },
    {
        name: "Izalco Volcano",
        category: "mountain",
        location: "Sonsonate",
        description: "The youngest volcano in the country. It erupted so often until 1966 that sailors called it the Lighthouse of the Pacific.",
        activities: ["hiking", "nature"],
        image: "images/izalco-volcano.webp",
        alt: "Cone-shaped Izalco Volcano seen from Santa Ana Volcano"
    },
    {
        name: "Lake Coatepeque",
        category: "lake",
        location: "Santa Ana",
        description: "A crater lake surrounded by green hills. Its water changes from deep blue to turquoise, and visitors enjoy kayaking, boat rides, and lake-view restaurants.",
        activities: ["swimming", "relaxing", "food"],
        image: "images/lake-coatepeque.webp",
        alt: "Blue water of Lake Coatepeque surrounded by green hills"
    },
    {
        name: "Lake Ilopango",
        category: "lake",
        location: "San Salvador",
        description: "The largest lake in El Salvador, formed inside an ancient volcanic caldera. Visitors take boat tours and visit the small islands in the lake.",
        activities: ["swimming", "nature"],
        image: "images/lake-ilopango.webp",
        alt: "Aerial view of Lake Ilopango inside its caldera"
    },
    {
        name: "Lake Güija",
        category: "lake",
        location: "Metapán, Santa Ana",
        description: "A lake shared with Guatemala. Some of its small islands have ancient rock carvings, and the area is great for bird watching.",
        activities: ["nature", "history"],
        image: "images/lake-guija.webp",
        alt: "Lake Güija with San Diego Volcano in the background"
    },
    {
        name: "Joya de Cerén",
        category: "cultural",
        location: "San Juan Opico, La Libertad",
        description: "A Maya farming village buried by volcanic ash around 600 AD. It is a UNESCO World Heritage Site known as the Pompeii of the Americas.",
        activities: ["history"],
        image: "images/joya-de-ceren.webp",
        alt: "Excavated adobe structures at Joya de Cerén"
    },
    {
        name: "Tazumal",
        category: "cultural",
        location: "Chalchuapa, Santa Ana",
        description: "One of the most important Maya archaeological sites in El Salvador. You can see its stone pyramid and learn more at the site museum.",
        activities: ["history"],
        image: "images/tazumal.webp",
        alt: "Stone pyramid at the Tazumal archaeological site"
    },
    {
        name: "Suchitoto",
        category: "cultural",
        location: "Cuscatlán",
        description: "A colonial town with cobblestone streets, art galleries, and views of Lake Suchitlán. It is one of the best places to enjoy local culture.",
        activities: ["history", "food", "relaxing"],
        image: "images/suchitoto.webp",
        alt: "Cobblestone street in Suchitoto with colorful houses"
    }
];
