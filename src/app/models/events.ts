export class Event {
    id: number;
    name: string;
    emailOfArtist: string;
    dateAndTime?: Date;

    constructor(
        id: number = 0,
        name: string = '',
        emailOfArtist: string = '',
        dateAndTime: Date = new Date()) {
        this.id = id;
        this.name = name;
        this.emailOfArtist = emailOfArtist;
        this.dateAndTime = dateAndTime;
    };
}
