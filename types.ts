export type IndexInfo = {
    name: string,
    photo: string,
    online: boolean,
    registration: string,
    age: number,
    video:VideoData

}
export type VideoData = {
    embed: string,
    text: string,
    link: string,
}