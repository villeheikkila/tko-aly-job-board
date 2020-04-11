import Logo from '../assets/tko-aly-logo.svg';

const Header = () => (
    <nav className="flex items-center justify-between flex-wrap bg-black p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Logo className="w-24" />
            <span className="font-semibold text-xl tracking-tight">
                Työpaikat
            </span>
        </div>
    </nav>
);

export default Header;
