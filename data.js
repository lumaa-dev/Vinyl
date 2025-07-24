export const strs = {
  en: { owned: "Owned Vinyl", wish: "Wish List" },
  fr: { owned: "Vinyles possédés", wish: "Vinyles souhaités" }
};

export const owned = [
    {
        name: "Are We There Yet?",
        artist: "James Marriott",
        img: "awty.png",
        ownDate: new Date("September 11, 2024 00:00:00"),
        discogs: "https://www.discogs.com/release/30490723-James-Marriott-Are-We-There-Yet"
    },
    {
        name: "Minecraft Volume Alpha",
        artist: "C418",
        img: "alpha.png",
        ownDate: new Date("June 13, 2025 00:00:00"),
        available: {
        fnac: "https://www.fnac.com/a9984639/C418-Minecraft-Volume-Alpha-Vinyle-Vert-Translucide-Vinyle-album",
        official: "https://c418.bandcamp.com/album/minecraft-volume-alpha"
        },
        discogs: "https://www.discogs.com/release/19894393-C418-Minecraft-Volume-Alpha"
    },
    {
        name: "Don't Tell The Dog",
        artist: "James Marriott",
        img: "dttd.png",
        ownDate: new Date("June 14, 2025 00:00:00"),
        discogs: "https://www.discogs.com/release/34247254-James-Marriott-Dont-Tell-The-Dog",
        available: {
        official: "https://jamesmarriottmusic.com/products/james-marriott-don-t-tell-the-dog-standard-vinyl",
        fnac: "https://www.fnac.com/a21790618/James-Marriott-Don-t-Tell-The-Dog-Vinyle-album"
        }
    },
    {
        name: "OK Computer",
        artist: "Radiohead",
        img: "ok_computer.jpg",
        ownDate: new Date("October 5, 2024 00:00:00"),
        discogs: "https://www.discogs.com/release/8690850-Radiohead-OK-Computer",
        available: {
        fnac: "https://www.fnac.com/a9716450/Radiohead-Ok-Computer-Vinyle-album",
        official: "https://store-eu.wasteheadquarters.com/products/ok-computer-cd?variant=15378650071114"
        }
    },
    {
        name: "Nevermind",
        artist: "Nirvana",
        img: "nevermind.jpg",
        ownDate: new Date("October 11, 2024 00:00:00"),
        discogs: "https://www.discogs.com/release/7097051-Nirvana-Nevermind",
        available: {
        fnac: "https://www.fnac.com/a1794240/Nirvana-Nevermind-Vinyle-album",
        amazon: "https://amazon.fr/Nevermind-Kurt-Cobain/dp/B0000088DC",
        official: "https://shop.nirvana.com/collections/vinyl/products/nevermind"
        }
    },
    {
        name: "In Utero (30th Anniversary)",
        artist: "Nirvana",
        img: "in_utero.jpg",
        ownDate: new Date("December 25, 2024 00:00:00"),
        discogs: "https://www.discogs.com/release/28714897-Nirvana-In-Utero",
        available: {
        amazon: "https://amazon.com/Utero-30th-Anniversary-LP-inch/dp/B0C3WFW9G6",
        official: "https://shop.nirvana.com/collections/in-utero-30th-anniversary/products/in-utero-30th-anniversary-1lp-10"
        }
    },
    {
        name: "In Rainbows",
        artist: "Radiohead",
        img: "in_rainbows.jpg",
        ownDate: new Date("December 26, 2024 00:00:00"),
        discogs: "https://www.discogs.com/release/8605874-Radiohead-In-Rainbows",
        available: {
        fnac: "https://www.fnac.com/a2175285/Radiohead-In-rainbows-Vinyle-album",
        official: "https://store-eu.wasteheadquarters.com/products/in-rainbows?variant=15378641158218"
        }
    },
    {
        name: "Igor",
        artist: "Tyler, The Creator",
        img: "igor.jpg",
        ownDate: new Date("December 26, 2024 00:00:00"),
        discogs: "https://www.discogs.com/release/14210644-TylerCreator-Igor",
        available: {
        fnac: "https://www.fnac.com/a13710812/Tyler-The-Creator-Igor-Vinyle-album"
        }
    },
    {
        name: "Call Me If You Get Lost",
        artist: "Tyler, The Creator",
        img: "cmiygl.jpg",
        ownDate: new Date("January 25, 2025 00:00:00"),
        discogs: "https://www.discogs.com/release/22786961-TylerCreator-Call-Me-If-You-Get-Lost",
        available: {
        fnac: "https://www.fnac.com/a16390466/Tyler-The-Creator-Call-Me-If-You-Get-Lost-Vinyle-album"
        }
    },
    {
        name: "Stared At From A Distance",
        artist: "Feldup",
        img: "safad.jpg",
        ownDate: new Date("January 25, 2025 00:00:00"),
        discogs: "https://www.discogs.com/release/28985836-Feldup-Stared-At-From-A-Distance",
        available: {
        fnac: "https://www.fnac.com/a18823547/Feldup-Stared-At-From-A-Distance-Vinyle-album",
        official: "https://feldup.bandcamp.com/album/stared-at-from-a-distance-2"
        }
    },
    {
        name: "The Colour And The Shape",
        artist: "Foo Fighters",
        img: "tcats.jpg",
        ownDate: new Date("January 31, 2025 00:00:00"),
        discogs: "https://www.discogs.com/release/7082120-Foo-Fighters-The-Colour-And-The-Shape",
        available: {
        fnac: "https://www.fnac.com/a8237882/Foo-Fighters-The-colour-and-the-shape-Vinyle-album"
        }
    }
];

export const wish = [
    {
        name: "Chromakopia",
        artist: "Tyler, The Creator",
        img: "chromakopia.jpg",
        wishDate: new Date("October 28, 2024 00:00:00"),
        priority: 1,
    },
    {
        name: "Don't Tap The Glass",
        artist: "Tyler, The Creator",
        img: "dttg.png",
        wishDate: new Date("July 21, 2025 00:00:00"),
        priority: 2,
    },
    {
        name: "Minecraft Volume Beta",
        artist: "C418",
        img: "beta.jpg",
        wishDate: new Date("June 13, 2025 00:00:00"),
        discogs: "https://www.discogs.com/master/955222-C418-Minecraft-Volume-Beta?format=Vinyl",
        available: {
        official: "https://c418.bandcamp.com/album/minecraft-volume-beta",
        fnac: "https://www.fnac.com/a14908524/C418-Minecraft-Volume-Beta-Vinyle-album"
        },
        priority: 8,
    },
    {
        name: "Who Really Cares",
        artist: "TV Girl",
        img: "who_really_cares.webp",
        wishDate: new Date("October 11, 2024 00:00:00"),
        priority: 3,
        discogs: "https://www.discogs.com/master/974361-TV-Girl-Who-Really-Cares?format=Vinyl",
        available: {
        amazon: "https://www.amazon.fr/Who-Really-Cares-LP-Vinyl/dp/B0DYZ2XQFD",
        fnac: "https://www.fnac.com/a21390414/TV-Girl-Who-Really-Cares-Vinyle-album",
        official: "https://www.hellomerch.com/products/who-really-cares-12-blue-pink-splatter-vinyl"
        }
    },
    {
        name: "The Bends",
        artist: "Radiohead",
        img: "the_bends.jpg",
        wishDate: new Date("January 25, 2025 00:00:00"),
        discogs: "https://www.discogs.com/master/17008-Radiohead-The-Bends?format=Vinyl",
        priority: 4,
        available: {
        fnac: "https://www.fnac.com/a9716452/Radiohead-The-Bends-Vinyle-album",
        amazon: "https://www.amazon.com/Bends-180g-Radiohead/dp/B01F0XLQZE",
        official: "https://store-eu.wasteheadquarters.com/products/the-bends-cd?variant=15378659311690"
        }
    },
    {
        name: "Whiplash Soundtrack",
        artist: "Justin Hurwitz",
        img: "whiplash.jpg",
        wishDate: new Date("July 18, 2025 00:00:00"),
        discogs: "https://www.discogs.com/master/825455-Various-Whiplash-Original-Motion-Picture-Soundtrack?format=Vinyl",
        priority: 5,
        available: {
        amazon: "https://www.amazon.fr/Whiplash-S-T-S-T/dp/B0C5JQ4ZL5",
        fnac: "https://www.fnac.com/a18254633/Collectif-Whiplash-Edition-Deluxe-Vinyle-album"
        }
    },
    {
        name: "Pablo Honey",
        artist: "Radiohead",
        img: "pablo_honey.jpg",
        wishDate: new Date("July 20, 2025 00:00:00"),
        discogs: "https://www.discogs.com/master/13344-Radiohead-Pablo-Honey?format=Vinyl",
        priority: 6,
        available: {
        amazon: "https://amazon.fr/Pablo-Honey-Radiohead/dp/B01F0XPBG4/261-4873903-6957845",
        fnac: "https://www.fnac.com/a9716447/Radiohead-Pablo-Honey-Vinyle-album",
        official: "https://shop.xlrecordings.com/release/346538-radiohead-pablo-honey?lang=fr"
        }
    },
    {
        name: "Kid A Mnesia",
        artist: "Radiohead",
        img: "kid_amnesia.webp",
        wishDate: new Date("January 25, 2025 00:00:00"),
        discogs: "https://www.discogs.com/master/2363104-Radiohead-Kid-A-Mnesia?format=Vinyl",
        priority: 7,
        available: {
        fnac: "https://www.fnac.com/a16253924/Radiohead-Kid-A-Mnesia-Vinyle-album",
        amazon: "https://www.amazon.fr/Kid-Mnesia-Radiohead/dp/B09DWX7BJ6",
        official: "https://merch-us.kida-mnesia.com/products/kid-a-mnesia-standard-triple-vinyl-kaa"
        }
    }
]