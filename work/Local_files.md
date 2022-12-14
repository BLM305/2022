## Reading Local Files

### Local Text

Yerel dosyaları okumak için FileReader gerekiyor. Yukarıda verilen URL'yi açıp bir kopyasını masa üstüne alalım. "Choose Files" ile bu dosyayı seçelim. FileReader içinde result olarak aynı metine erişebiliriz. Metin seçili iken vereceğimiz `JSON.parse(_)` komutu ile metini nesneye çevirebiliriz.

### Local Image

Aynı şekilde seçilen resim dosyaları da yine FileReader ile okunur. Bununla ilgili birkaç komut Async menüsünde tanımlanmış. Onları da deneyelim.

### Remote Image

fetch() ile gelen bir resmi göstermek için aynı yazılımı kullanalım:
```
u = 'https://avatars1.githubusercontent.com/u/14038292'
fetch(u).then(r => r.blob()).then(display)
```
Bu şekilde yapılan Blob nesnesini nasıl okuyacağız? Önce "Choose Files" ile yerel bir resim dosyasını açalım. Böylece, FileReader resim okuma moduna girer. Şimdi önce içinde resim olan Blob nesnesine, sonra FileReader'a tıklayın ve readAsDataURL(__) metodunu çağırın. İşte okuduğumuz resim ekranda.

![fetch image](../images/fetch_remote_image.png)

<script src="/2022/navbar.js"></script>
<style>
  body { 
    max-width: 600px; 
    background: #cef;
  }
  #navbar {
    margin-left: 0;
  }
</style>
