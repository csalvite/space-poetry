const AngleDown = () => {
    return (
        <i className="fa-solid fa-angle-down"
           onClick={() => window.scrollTo({
               top: 900,
               behavior: 'smooth',
           })}></i>
    )
}

export { AngleDown };