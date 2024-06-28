export class Doctor {
    userName: string;
    lastName: string;
    email: string;
    personId: string;
    category: string;
    photoPath: string;
    reviewCount: string;
    rating: string;
    pinned: boolean;
    constructor(
        userName: string = '',
        lastName: string = '',
        email: string = '',
        category: string = '',
        reviewCount: string = '',
        rating: string = '',
        personId: string = '',
        photoPath: string = '',
        pinned: boolean = false) {
        this.userName = userName;
        this.lastName = lastName;
        this.email = email;
        this.category = category;
        this.reviewCount = reviewCount;
        this.rating = rating;
        this.personId = personId;
        this.photoPath = photoPath;
        this.pinned = pinned;
    };
}