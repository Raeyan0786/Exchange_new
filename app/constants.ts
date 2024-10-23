export const Nav_data = ({ isAuthorized }) => [
    {
      id: "101",
      name: "Home",
      route: "/",
    },
    {
      id: "102",
      name: "Coach",
      route: "/coach",
    },
    {
      id: "103",
      name: "Community",
      route: !isAuthorized ? "/login" : "/community",
    },
    {
      id: "105",
      name: "Notification",
      route: !isAuthorized ? "/login" : "/notification",
    },
    // {
    //   id: "106",
    //   name: "Challenge",
    //   route: !isAuthorized ? "" : "/challenges",
    // },
  
    // {
    //   id:"104",
    //   name:"Job",
    //   route:!isAuthorized ? '/login': "/job",
    // },
  ];

  export const accDetails = [
    {
      id: 'account-avatar-1',
      alt: 'account',
      srcImg: 'svg/Avatar.svg',
      fallbackSrcImg: 'svg/Avatar.svg',
      className: 'h-18 mr-5 w-11',
    },
    {
      id: 'account-avatar-2',
      alt: 'side-bar',
      srcImg: 'svg/menu.svg',
      fallbackSrcImg: 'svg/menu.svg',
      className: 'mr-4 h-7 w-7',
    },
  ];

  export const Pharma_data = [
    {
      id: "101",
      name: "Inventory ",
      route: "/inventory-management",
      role:"Store Manager"
    },
    {
      id: "102",
      name: "Team",
      route: "/team-management",
      role:"Store Manager"
    },
    {
      id: "103",
      name: "Order",
      route: "order-management",
      role:"Store Manager"
    },
  ]