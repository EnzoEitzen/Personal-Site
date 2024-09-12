import React from "react";
import {Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator} from "@/components/ui/breadcrumb";


export function NavigationBar({children}) {
    return (<>
        <Breadcrumb className="mb-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    {children[0]}
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    {children[1]}
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    {children[2]}
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </>)
}

