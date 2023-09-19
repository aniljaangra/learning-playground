enum ROLES {
    ADMIN,
    USER,
    SUPERADMIN
}

type User = {
    lists : [number, string]  // Tuple
    numbers : number | number[] // Literal

}

console.log(ROLES.ADMIN)


const mergeObject = <T, U extends keyof T>(obj : T, key : U) : T => {
    return obj;
}

const jb = mergeObject({ name : { age : 34}},"name")
jb.name.age;


export interface Task {
    title: string;
    priority: TaskPriority;
}

export enum TaskPriority {
    LOW = "Low",
    MEDIUM = "Medium",
    HIGH = "High"
}

const TS = {"key": "he"}

const keys : typeof TS = {"key": "fdf"};

const priorityOrder = { High: 1, Medium: 2, Low: 3 } as const;
export const sortByPriority = (arr: Task[]) => {
    const highToLow = (a: Task, b: Task) => {
        return (
            priorityOrder[a.priority as keyof typeof priorityOrder] -
            priorityOrder[b.priority as keyof typeof priorityOrder]
        );
    };

    return arr.sort(highToLow);
};
const tasks: Task[] = [
    { title: "test1", priority: TaskPriority.MEDIUM }, // TaskPriority.MEDIUM = "Medium"
    { title: "test2", priority: TaskPriority.LOW },
    { title: "test3", priority: TaskPriority.HIGH },
    { title: "test4", priority: TaskPriority.LOW }
];

const sortedArr = sortByPriority(tasks);
console.log(sortedArr);
