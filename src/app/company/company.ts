import { Vacancy } from "../vacancy/vacancy";

export interface Company {
    id: number;
    name: string;
    street: string;
    city: string;
    pictureUrl: string;
    vacancies: Array<Vacancy>;

}
