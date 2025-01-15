interface Book{
    id : number;
    title: string;
    author : string;
    genre : string;
    rating : number;
    totalCopies: number;
    availableCopies: string;
    description : string;
    color : string;
    coverUrl : string;
    video : string;
    summary: string;
    isLoanBook ?: bolean;
}