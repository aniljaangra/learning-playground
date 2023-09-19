var ROLES;
(function (ROLES) {
    ROLES[ROLES["ADMIN"] = 0] = "ADMIN";
    ROLES[ROLES["USER"] = 1] = "USER";
    ROLES[ROLES["SUPERADMIN"] = 2] = "SUPERADMIN";
})(ROLES || (ROLES = {}));
console.log(ROLES.ADMIN);
