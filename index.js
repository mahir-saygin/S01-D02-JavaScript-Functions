function tasKagitMakas(kullanicininSecimi) {
  const rastgele = Math.floor(Math.random() * 3);
  let bilgisayar;
  if (rastgele === 0) {
    bilgisayar = 'taş';
  } else if (rastgele === 1) {
    bilgisayar = 'kağıt';
  } else {
    bilgisayar = 'makas';
  }
  let sonuc;
  if (kullanicininSecimi === bilgisayar) {
    sonuc = 'Beraberlik!';
  } else if (
    (kullanicininSecimi === 'taş' && bilgisayar === 'makas') ||
    (kullanicininSecimi === 'kağıt' && bilgisayar === 'taş') ||
    (kullanicininSecimi === 'makas' && bilgisayar === 'kağıt')
  ) {
    sonuc = 'Kazandın!';
  } else {
    sonuc = 'Kaybettin!';
  }
  return (
    'Senin seçimin: ' +
    kullanicininSecimi +
    '. ' +
    'Bilgisayarın seçimi: ' +
    bilgisayar +
    '. ' +
    sonuc
  );
}
/* Bu satırdan sonraki satırları silmeyin! */
module.exports = tasKagitMakas;
