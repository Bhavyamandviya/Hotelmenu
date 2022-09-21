import React from "react";

const navbar = ({ filterItem, menuList }) => {
    return (
        <>
            
            
            <nav className="navbar">
                <div className="btn-group">
                    {menuList.map((curElem) => {
                        return (
                            <button
                                className="btn-group__item"
                                onClick={() => filterItem(curElem)}>
                                {curElem}
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </button>
                            
                        
                        );
                    })}
                    
                           
                        
                    
                </div>
            </nav>
        </>
    );
};

export default navbar;