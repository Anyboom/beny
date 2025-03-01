export function findBy<T>(data: T[], key: keyof T, value: any): T | null {
    try {
        const entity = data.find((entity: T) => entity[key] === value);

        return entity || null;
    } catch {
        return null;
    }
}
