// console.log('Hello, world!');

function HelloRoutes(app){
app.get('/', (req, res) => {
    res.send('Weloome to full stack web dev!');
});

app.get('/hello', (req, res) => {
    res.send('Life is good!!');
});
}

export default HelloRoutes;