import { useSession, signIn, signOut } from "next-auth/react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import Link from "next/link";

const Header = () => {
    const { data: session, status } = useSession();

    return(
		<>
			<nav className="bg-white dark:bg-gray-800">
				<div className="max-w-screen-xl container flex flex-wrap justify-between items-center mx-auto px-4 md:px-6 py-2.5">
					<Link href="/">
						<a className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
							Manga Next
						</a>
					</Link>
					<div className="relative md:block">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
							<span className="sr-only">Search icon</span>
						</div>
						<input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
					</div>
					<div className="flex md:order-2">
						{status === "authenticated"
							? (
								<Dropdown arrowIcon={false} inline={true}
									label={<Avatar alt="User settings" img={session?.user?.image || undefined} rounded={true}/>}
								>
									<Dropdown.Header>
										<span className="block text-sm">{session?.user?.name || "visitor"}</span>
										<span className="block truncate text-sm font-medium">{session?.user?.email}</span>
									</Dropdown.Header>
									<Dropdown.Item><Link href={"/profile/settings"}><a>Settings</a></Link></Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
								</Dropdown>
							)
							: (
								<Button onClick={() => signIn()}>
									Sign in
								</Button>
							)
						}
					</div>
				</div>
			</nav>
			<nav className="bg-gray-50 dark:bg-gray-700">
				<div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
					<div className="flex items-center">
						<ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
							<li>
								<Link href={"/"}>
									<a className="text-purple-300 dark:text-gray-500 dark:hover:text-purple-300">Home</a>
								</Link>
							</li>
							<li>
								<Link href={"/"}>
									<a className="text-purple-300 dark:text-gray-500 dark:hover:text-purple-300">Manga list</a>
								</Link>
							</li>
							<li>
								<Link href={"/"}>
									<a className="text-purple-300 dark:text-gray-500 dark:hover:text-purple-300">Genres</a>
								</Link>
							</li>
							<li>
								<Link href={"/"}>
									<a className="text-purple-300 dark:text-gray-500 dark:hover:text-purple-300">Advanced search</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
    );
}

export default Header;