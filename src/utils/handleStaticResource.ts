export const getDatasourceImages = (url: string): string => {
    return new URL(`../assets/dataSource/${url}`, import.meta.url).href
}