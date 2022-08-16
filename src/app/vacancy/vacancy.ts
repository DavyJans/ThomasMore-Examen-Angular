import { Company } from "../company/company";

export interface Vacancy {
    id: number;
    functionTitle: string;
    jobDescriptionTitle: string;
    jobDescriptionContent: string;
    profileContent: string;
    offerContent: string;
    otherContent: string;
    author: string;
    publishDate: string;
    closingDate: string;
    location: string;
    editor: string;
    companyId: number;
    statusId: number;
    authorId: number;
    company: Company
}
