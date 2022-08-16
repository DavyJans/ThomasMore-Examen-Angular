import {Vacancy} from "../vacancy/vacancy";

export interface Company {
    id: number;
    name: string;
    vacancies: Array<Vacancy>;

}
