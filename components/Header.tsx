function Header() {
  return (
    <header>
      <div className="bg-stack-200 bg-[url('/static/images/background.jpg')] bg-cover bg-right-bottom bg-blend-soft-light">
        <div className="container mx-auto max-w-5xl py-40 md:py-32 px-4 md:px-28">
          <h1 className="font-bold text-6xl text-stack-700 pb-2">Hai Thư</h1>
          <p className="font-medium font-serif text-lg text-stack-500">
            Dịch vụ tang lễ trọn gói tại Đơn Dương, Lâm Đồng
          </p>
        </div>
      </div>
      <div className="bg-stack-400 px-8 py-6">
        <h2 className="text-center text-xl text-stack-50">
          Phục vụ 24 /24, tất cả các ngày trong tuần!
        </h2>
      </div>
    </header>
  )
}

export default Header
