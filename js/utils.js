// Zaman dilimini kullanarak bicimlendirilmis bir tarih ve saat bilgisini döndüren fonksiyon.
function convertTimeStamp(timeStamp, timezone) {
    // Zaman dilimini saat cinsinden dönüstürür (saniyeden-saat'e)
    const convertTimezone = timezone / 3600;
    // Yeni bir tarih nesnesini oluşturur.
    const date = new Date(timeStamp * 1000);
    // Tarih ve saat bilgisi için seçenekleri belirle
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timezone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
        convertTimezone
      )}`, // Zaman dilimini belirler.
      hour12: true, // 12 saat formatında gösterilsin mi?
    };
    // Tarihi ve saati kullanıcıya dost bir formatta döndürürr
    return date.toLocaleString("en-US", options);
  }
  // Ulke kodunu ulke adına çeviren fonksiyon.
  function convertCountryCode(country) {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    // Ulke kodunu alınca bu "Intl.DisplayNames" örnegi kullanarak ülke adına dönderir.
    console.log(regionNames.of(country));
    return regionNames.of(country);
  }
  
  export { convertTimeStamp, convertCountryCode };
  /*
      * Intl.DisplayNames: Javascriptte uluslararası dil ve bölge adlarına 
      * çevirmek için kullanılan bir API'dir.
  
      * Intl:Internationalization
      * DisplayNames
  */