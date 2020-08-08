export interface PHOTO {
    total: any;
    total_pages: any;
    results: SEARCHPHOTO[];
}

export interface SEARCHPHOTO {
    id: string;
    created_at: string;
    updated_at: string;
    promoted_at: string;
    width: any;
    height: any;
    color: string;
    description: string;
    alt_description: string;
    urls: URLS[];
    links: LINKS[];
    categories: [];
    likes: any;
    liked_by_user: boolean;
    current_user_collections: [];
    sponsorship: null;
}
export interface URLS {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}
export interface LINKS {
    self: string;
    html: string;
    download: string;
    download_location: string;
}
export interface USERS {
    id: string,
    updated_at: string,
    username: string,
    name: string,
    first_name: string,
    last_name: string,
    twitter_username: null,
    portfolio_url: string,
    bio: null,
    location: string,
    links: {
        self: string,
        html: string,
        photos: string,
        likes: string,
        portfolio: string,
        following: string,
        followers: string,
    },
    profile_image: {
        small: string,
        medium: string,
        large: string,
    },
    instagram_username: string,
    total_collections: number,
    total_likes: number,
    total_photos: number,
    accepted_tos: boolean
}
