export class ApiResponse<T> {
    public hasError: boolean;
    public data: T;
    public errorMessages: string[];
}
