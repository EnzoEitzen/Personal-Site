import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import React from "react";

export function NavigationBar({children}) {
    return (
        <Breadcrumb className="mb-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    {children[0]}
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    {children[1]}
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}