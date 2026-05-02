const Footer = () => {
  return (
    <footer className="bg-konoha-light py-8 border-t border-konoha-orange/20 mt-16 text-center">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col gap-2">
        <p className="text-konoha-muted">&copy; {new Date().getFullYear()} Kelompok Konoha. All rights reserved.</p>
        <p className="font-accent text-konoha-orange italic font-medium">"Tekad Api Tidak Pernah Padam"</p>
      </div>
    </footer>
  );
};

export default Footer;
