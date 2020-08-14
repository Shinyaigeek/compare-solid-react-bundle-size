export const fetchPost = () => {
    return fetch("https://raw.githubusercontent.com/Shinyaigeek/shinyaigeek.dev/welcome/solid/post/index.json").then(res => {
        return res.json();
    })
}