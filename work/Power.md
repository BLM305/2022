## Power of DevTools

These are several examples that demonstrate the power of DevTools. Each snippet (except the last) should be run on its definition page.

### 1. [GitHub Users](https://maeyler.github.io/JS/api/GitHub_Users)
Add links to each repo of a given user

````
repoList.innerHTML = repoList.textContent.split(', ')
    .map(x => '<a>'+x+'</a>').join(', ')
for (x of repoList.querySelectorAll('a')) {
    x.href = repoLink.href+'/'+x.innerText
    x.target = repoLink.target
}
````

### 2. [YouTube playlist](https://www.youtube.com/playlist?list=PLj6YeMhvp2S5UgiQnBfvD7XgOMKs3O_G6)
Show the contents of a given playlist

````
a = document.querySelector('div#contents')
b = [...a.querySelectorAll('a#video-title')]
c = b.map((x,i) => (i+1)+'. '+x.title)
console.log(c.join('\n'))
````

### 3. [GitHub Universe](https://githubuniverse.com/events/detail/speakers) 
Make an Array of speaker Objects

````
a = [...document.querySelectorAll('div.CardSpeaker')]
b = a.map(x => { let name = x.querySelector('h4').textContent;
    let [pos, com] = x.querySelector('p>span').textContent.split(' | ');
    return {name, pos, com} })
b.filter(x => x.com !== 'GitHub')
b.reduce((s,x) => s.add(x.com), new Set)
````

### 4. Drawing sprites on Canvas
Runs on any web page --
Ref: [Chap 17](https://eloquentjavascript.net/17_canvas.html#p_qMrOddcbqu)

````
  let cv = document.createElement("canvas")
  let cx = cv.getContext("2d");
  cv.width = 680; document.body.append(cv)
  let img = document.createElement("img");
  img.src = "https://eloquentjavascript.net/img/player.png";
  img.onload = () => { setInterval(draw, 120) }
  let W = 24, H = 30, k = 0, x = 0;
  let draw = () => {
      cx.clearRect(x, 0, W, H);
      x = (x + W) % cv.width;
      cx.drawImage(img,
                   // source rectangle
                   k*W, 0, W, H,
                   // destination rectangle
                   x,   0, W, H);
      k = (k + 1) % 8;
  }
````

<script src="/2022/navbar.js"></script>
<style>
  body { 
    max-width: 700px; 
    background: #cef;
  }
  #navbar {
    margin-left: 0;
  }
</style>
