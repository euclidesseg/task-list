export interface Task{
    id:string;
    title:string;
    done:boolean
}

export type FilterTypeTask = "all"|"todo"|"done";