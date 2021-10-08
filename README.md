[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=5762153&assignment_repo_type=AssignmentRepo)
# Shopping Cart 
Alışveriş sitesi uygulaması oluşturmanız gerekiyor. Buradan örnek uygulamanın tasarımına ulaşabilirsiniz.
https://www.figma.com/file/9hO1ApoWscZXLEqrCkFEGI/2-week-assignment
Hazır data için db.json dosyasını kullanabilirsiniz. Bu dosyayı json-server ile ayağa kaldırıp API gibi kullanabilirsiniz.

## Sayfalar
1. Ana sayfa
<img width="345" alt="home" src="https://user-images.githubusercontent.com/43746150/136630302-4e8643a3-862c-4535-addc-29ebbfd5a071.PNG">

    * Burada site ile ilgili gelen bir bilgi ve görsel yer alacaktır. Top Navbar dahildir.
2. Shop page
<img width="426" alt="shop" src="https://user-images.githubusercontent.com/43746150/136630363-93fb4c82-9bf8-4e6a-8430-9cb5f9e23fdd.PNG">

    * Üstteki Shop linkine tıklandığında açılacak sayfadır. Ürünler burada listelenecektir. 
    * soldaki checkbox menüsünden category bazında filtreleme yapılacaktır.
    * Sağdaki sort by dropdown'ında sıralama işlemi gerçekleştirilebilecektir.
        * popülerite (azalan), 
        * fiyat (artan)
        * fiyat (azalan)
3. Product page
<img width="740" alt="stories" src="https://user-images.githubusercontent.com/43746150/136630385-bc082a79-dba3-4be4-a0d2-8ffc6b0444fb.PNG">

    * Ürün detay bilgileri yer alacaktır.
    * Quantity alanı ile birlikte Add to Cart butonundaki değer hesaplanacaktır. Örn 2 item alacaksa fiyat x 2 şeklinde olacaktır.
    * Add to cart butonuna basıldığında eğer kullanıcı login değilse login olma ekranına yönlendirilecektir. 
    * Eğer kullanıcı loginse alışveriş sepetine eklenecektir ve üstteki alışveriş sepeti ikonundaki değer 1 arttırılacaktır.
4. Login page

<img width="548" alt="login" src="https://user-images.githubusercontent.com/43746150/136630409-cda692b0-fe46-4cb7-9f29-f3a6260f7593.PNG">

    * Kullanıcının login işlemi gerçekleştirilecektir. 
    * User listesi için db.json içerisindeki /users endpoint'i kullanılabilir.
    * Eğer username ve password bilgisi uyuşuyorsa client side'da bir token oluşturulup localStorage'a yazılacaktır
    * Login olunduktan sonra, önceki sayfa hangisi ise ona yönlendirilecektir. Örneğin product sayfasından geldi diyelim, aynı ürünün sayfasına redirect edilecektir.
5. Cart page
<img width="149" alt="addedcart" src="https://user-images.githubusercontent.com/43746150/136630431-3dcd8798-8146-47a1-8406-5e2f96da0fca.PNG">

    * Alışveriş sepei bilgileri yer alacaktır.
    * Alınan tüm ürünlerin fiyatı hesaplanıp görüntülenecektir.
    * Eklenen ürün Remove butonu ile sepetten çıkarılabilecektir.
<img width="712" alt="about" src="https://user-images.githubusercontent.com/43746150/136630454-005f3a38-2865-4616-8f26-c723cdfbf2a4.PNG">

## Notlar
* Proje içerisinde react-router-dom ve ant design eklenmiştir. Bu kütüphaneleri direkt olarak kullanabilirsiniz.
