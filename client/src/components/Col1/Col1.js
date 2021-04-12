import React from "react";

export function Continer1({ fluid, children }) {
    return <div className={`Continer1${fluid ? "-fluid" : ""}`}>{children}
    </div>;
}

export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}
    </div>;
}

export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "col-" + size)
                .join(" ")}
        >
            {children}
        </div>
    );
}