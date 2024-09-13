
const playlistArr = [
    {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        albumArt: 'bohemian-rhapsody.png'
    },
    {
        title: 'As It Was',
        artist: 'Harry Styles',
        albumArt: 'as-it-was.png'
    },
    {
        title: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        albumArt: 'stairway-to-heaven.png'
    },
    {
        title: 'Therefore I Am',
        artist: 'Billie Eilish',
        albumArt: 'therefore-i-am.png'
    }
];
const playlistHtml = playlistArr.map((track) => {
  return `<section class="card">
        <div class="card-start">
            <img src="${track.albumArt}" alt="${track.title} album cover">
        </div>
        <div class="card-mid">
            <h4 class="card-title">${track.title}</h4>
            <p class="card-artist">${track.artist}</p>
        </div>
        <div class="card-end">
            <p class="card-menu">...</p>
        </div>
    </section>`;
}).join(' '); // This ensures that the array of HTML is joined into a single string

document.getElementById('container').innerHTML = playlistHtml;
