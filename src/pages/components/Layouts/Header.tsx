import { useSession } from "next-auth/react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";
import Link from "next/link";

const Header = () => {
    const { data: session, status } = useSession();

    return(
        <Navbar fluid={true}>
            <Navbar.Brand href="https://flowbite.com/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Flowbite
                </span>
            </Navbar.Brand>
			<Navbar.Collapse>
				<Link href="/"><Navbar.Link href="/">Home</Navbar.Link></Link>
				<Navbar.Link href="/navbars">About</Navbar.Link>
				<Navbar.Link href="/navbars">Services</Navbar.Link>
				<Navbar.Link href="/navbars">Pricing</Navbar.Link>
				<Navbar.Link href="/navbars">Contact</Navbar.Link>
			</Navbar.Collapse>
			<div className="hidden relative md:block">
				<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
					<svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
					<span className="sr-only">Search icon</span>
				</div>
				<input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
			</div>
			<div className="flex md:order-2">
				<Dropdown arrowIcon={false} inline={true}
					label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
				>
					<Dropdown.Header>
						<span className="block text-sm">Bonnie Green</span>
						<span className="block truncate text-sm font-medium">name@flowbite.com</span>
					</Dropdown.Header>
					<Dropdown.Item>Dashboard</Dropdown.Item>
					<Dropdown.Item>Settings</Dropdown.Item>
					<Dropdown.Item>Earnings</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item>Sign out</Dropdown.Item>
				</Dropdown>
				<Navbar.Toggle />
			</div>
		</Navbar>
    );
}

export default Header;