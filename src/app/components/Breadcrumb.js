// import { useRouter } from 'next/router';
'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const Breadcrumb = () => {
    //   const router = useRouter();
    const pathname = usePathname(); // Get the current path
    const pathArray = pathname.split('/').filter(path => path);

    return (
        <div className="flex flex-col flex-wrap gap-8 mt-2">
            <Breadcrumbs separator={<ChevronRightIcon className="h-5 w-5 text-gray-500" />} variant={'bordered'}>
                <BreadcrumbItem>
                    <Link href="/" className="text-green-800 hover:underline">Home</Link>
                </BreadcrumbItem>
                {pathArray.map((path, index) => {
                    const href = '/' + pathArray.slice(0, index + 1).join('/');
                    const isLast = index === pathArray.length - 1;

                    return (
                        <BreadcrumbItem key={index} isCurrentPage={isLast}>
                            {isLast ? (
                                <span className="text-gray-500">{path}</span>
                            ) : (
                                <Link href={href} className="text-green-800 hover:underline">{path}
                                </Link>
                            )}
                        </BreadcrumbItem>
                    );
                })}
            </Breadcrumbs>
        </div>
    );
};

export default Breadcrumb;