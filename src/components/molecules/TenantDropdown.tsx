"use client";
import { useState } from "react";
import { Tenant } from "../../../tenant";
import { useRouter } from "next/navigation";
import { formatUrl } from "../utils";
import { Locales } from "intlayer";

export const TenantDropdown = ({
  selected,
  locale,
  tenantList,
}: {
  selected: string;
  locale: Locales;
  tenantList: Tenant[];
}) => {
  //   const content = useIntlayer("molecules");
  const selectedTenant = tenantList.find((t) => t.tenantId == selected);
  const [isDropdownVisible, setDropdownState] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div>
      <label
        id="listbox-label"
        className="block text-sm/6 font-medium text-gray-900"
      ></label>
      <div className="relative mt-2">
        <button
          type="button"
          className="grid w-full cursor-default grid-cols-1 rounded-elem bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:primary sm:text-sm/6"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={() => {
            setDropdownState((state) => !state);
          }}
        >
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <img
              src={selectedTenant?.logoUrl}
              alt={"logo" + selectedTenant?.tenantUserName}
              className="size-5 shrink-0 rounded-full"
            />
            <span className="block truncate">{selectedTenant?.tenantName}</span>
          </span>

          <svg
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isDropdownVisible && (
          <ul
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {tenantList.map((tenant: Tenant, idx: number) => {
              return (
                <li
                  key={tenant.id ? tenant.id : idx}
                  className="relative cursor-pointer py-2 pr-9 pl-3 text-gray-900 select-none z-10 hover:bg-grey-200"
                  id="listbox-option-0"
                  role="option"
                  data-tenant={tenant.tenantId}
                  onClick={(event) => {
                    console.log(event.currentTarget);
                    router.push(
                      formatUrl(
                        event.currentTarget?.dataset?.tenant as string,
                        locale as string,
                        "/login"
                      )
                    );
                  }}
                >
                  <div className="flex items-center z-1">
                    <img
                      src={tenant.logoUrl}
                      alt={"logo-" + tenant.tenantUserName}
                      className="size-5 shrink-0 rounded-full"
                    />

                    <span className="ml-3 block truncate font-normal">
                      {tenant.tenantName}
                    </span>
                    {selectedTenant &&
                      selectedTenant.tenantId == tenant.tenantId && (
                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                          <svg
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
