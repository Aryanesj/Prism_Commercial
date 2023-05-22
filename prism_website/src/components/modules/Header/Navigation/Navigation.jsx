import React, { useState, useEffect, useRef} from 'react'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import classNames from 'classnames'
import NavLinks from '../NavLinks'
import styles from './Navigation.module.scss'

const Navigation = () => {

	const [isOpen, setIsOpen] = useState(false);

    const node = useRef();

    const handleClickOutside = (e) => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click 
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

	const toggle = () => {
		setIsOpen(!isOpen)
	}

	const hamburgerIcon = (
		<IoMdMenu
			className={styles.hamburger}
			onClick={toggle}
            size="24px"
			color="#3D38E7"
		/>
	)

	const closeIcon = (
		<IoMdClose
			className={styles.hamburger}
			onClick={toggle}
            size="24px"
			color="#3D38E7"
		/>
	)

	const navClass = classNames(styles.navigation, !isOpen && styles.hidden)

	return (
		<nav className={navClass} ref={node}>
			{isOpen ? closeIcon : hamburgerIcon}
			<NavLinks toggle={setIsOpen} />
		</nav>
	)
}

export default Navigation