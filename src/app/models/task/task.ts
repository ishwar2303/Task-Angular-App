export interface Task {
    taskId: number
    assignmentGroup: string
    title: string
    description: string
    comments: string[]
    priority: string
    status: string
    isDeleted: boolean
    dueDate: string
    addedOn: string
}
