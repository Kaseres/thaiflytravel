import LayoutContainer from '@/components/contaner/LayoutContainer';
type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  )
}

export default Layout
