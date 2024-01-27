export interface Blog {
    count:    number;
    next:     null;
    previous: null;
    results:  Post[];
}

export interface Post {
    slug:            string;
    title:           string;
    description:     string;
    category:        Category;
    content:         string;
    created:         Date;
    visitor_counter: number;
    published:       boolean;
    picture:         string;
    reading_time:    number;
}

export interface Category {
    id:      number;
    name:    string;
    name_es: null | string;
    slug:    string;
    picture: null;
}
