// config.js - മൾട്ടി-ഷോപ്പ് കോൺഫിഗറേഷൻ & വിഷ്വൽ തീം

window.SHOPS_CONFIG = [
  {
    id: 'shop1',
    name: 'NASSER BIN EID ALMAHMADI',
    tagline: 'Main Supermarket Branch',
    url: 'https://elubqoicerkldrufqcbj.supabase.co',
    key: 'sb_publishable_zsEKreCmounELozZ5EQ3Lg_aXyut9EK',
    pin: '1234',
    deletePin: '9999',
    // ഷോപ്പ് 1-ന്റെ തീം: പച്ച (Emerald) & ലോഗോ
    themeGradient: 'from-emerald-900 via-slate-900 to-teal-950',
    accentColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    logo: 'https://cdn-icons-png.flaticon.com/512/3081/3081840.png' // നിങ്ങളുടെ ഷോപ്പ് ഫോട്ടോ / Logo URL ഇവിടെ നൽകാം
  },
  {
    id: 'shop2',
    name: 'BOOFIYA',
    tagline: 'Boofiya Restaurant & Cafeteria',
    url: 'https://qkjcviszzdptssvpguwc.supabase.co',
    key: 'sb_publishable_J0Z4b7NoP3VuDKdbC0WeIg_OQAlpnLQ',
    pin: '5678',
    deletePin: '8888',
    // ഷോപ്പ് 2-ന്റെ തീം: ഓറഞ്ച്/ചുവപ്പ് (Amber/Rose) & ലോഗോ
    themeGradient: 'from-amber-950 via-slate-900 to-orange-950',
    accentColor: 'text-amber-400',
    badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    logo: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' // ബൂഫിയ ലോഗോ / ഫോട്ടോ URL
  }
];

// ഡിഫോൾട്ട് കോൺഫിഗറേഷൻ
window.GLOBAL_CONFIG = {
  supabaseUrl: 'https://elubqoicerkldrufqcbj.supabase.co',
  supabaseKey: 'sb_publishable_zsEKreCmounELozZ5EQ3Lg_aXyut9EK'
};

// സൗദി ബിസിനസ് തീയതി (രാവിലെ 6:00 AM കട്ട്-ഓഫ്)
window.getSaudiBusinessDate = function() {
  const now = new Date();
  const saudiTimeStr = now.toLocaleString("en-US", { timeZone: "Asia/Riyadh" });
  const saudiDate = new Date(saudiTimeStr);
  if (saudiDate.getHours() < 6) {
    saudiDate.setDate(saudiDate.getDate() - 1);
  }
  const year = saudiDate.getFullYear();
  const month = String(saudiDate.getMonth() + 1).padStart(2, '0');
  const day = String(saudiDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};