
interface Props{
    children:React.ReactNode;
};
const Layout = ({children}:Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center  p-6 md:p-10">
      <div className="w-full flex flex-col item justify-center max-w-sm md:max-w-3xl">

{children}</div>
</div>
  )
}

export default Layout