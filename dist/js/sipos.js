// ? --------------------------------------------------------------------------
$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
        $(document).on('click', '[data-toggle="lightbox"]', function (event) {
            event.preventDefault();
            $(this).ekkoLightbox({
                alwaysShowClose: true
            });
        });
    })
});

// ? Baru
// ? --------------------------------------------------------------------------
// ? Functions Script
// ? --------------------------------------------------------------------------
$(document).ready(function () {
    loadDisplay();
    $(function () {
        bsCustomFileInput.init();
    });
});

function loadDisplay() {
    userDisplay();
    roleDisplay();
    menuDisplay();
    submenuDisplay();
    categoryDisplay();
    UnitDisplay();
    productDisplay();
    uppearBtn();
}

function loader() {
    let loader = '<div class = "overlay d-flex justify-content-center align-items-center">';
    loader += '<i class = "fas fa-2x fa-sync fa-spin" > </i>';
    loader += '</div>';
    return loader;
}

function userDisplay() {
    $.ajax({
        url: '/user/user_display',
        dataType: "html",
        beforeSend: function () {
            let load = '<div class="col-12">';
            load += loader();
            load += '</div>';
            $('.user-display').html(load);
        },
        success: function (response) {
            $('.user-display').html(response);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
        }
    });
};

function roleDisplay() {
    $.ajax({
        url: '/role/role_display',
        dataType: "html",
        beforeSend: function () {
            let load = '<div class="col-12">';
            load += loader();
            load += '</div>';
            $('.role-display').html(load);
        },
        success: function (response) {
            $('.role-display').html(response);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
        }
    });
};

function menuDisplay() {
    $.ajax({
        url: '/menus/menu_display',
        dataType: "html",
        beforeSend: function () {
            let load = '<div class="col-12">';
            load += loader();
            load += '</div>';
            $('.menu-display').html(load);
        },
        success: function (response) {
            $('.menu-display').html(response);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
        }
    });
};

function submenuDisplay() {
    $.ajax({
        url: '/submenus/submenu_display',
        dataType: "html",
        beforeSend: function () {
            let load = '<div class="col-12">';
            load += loader();
            load += '</div>';
            $('.submenu-display').html(load);
        },
        success: function (response) {
            $('.submenu-display').html(response);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError);
        }
    });
};

function categoryDisplay() {
    $.ajax({
        url: '/category/category_display',
        dataType: "html",
        beforeSend: function () {
            let load = '<div class="col-12">';
            load += loader();
            load += '</div>';
            $('.category-display').html(load);
        },
        success: function (response) {
            $('.category-display').html(response);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError);
        }
    });
};

function UnitDisplay() {
    $.ajax({
        url: '/unit/unit_display',
        dataType: "html",
        beforeSend: function () {
            let load = '<div class="col-12">';
            load += loader();
            load += '</div>';
            $('.unit-display').html(load);
        },
        success: function (response) {
            $('.unit-display').html(response);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError);
        }
    });
};

function productDisplay() {
    $.ajax({
        url: '/product/product_display',
        dataType: "html",
        beforeSend: function () {
            let load = '<div class="col-12">';
            load += loader();
            load += '</div>';
            $('.product-display').html(load);
        },
        success: function (response) {
            $('.product-display').html(response);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError);
        }
    });
};

function imgpreview() {
    if (userimage.files[0]) {
        const file = new FileReader();
        file.readAsDataURL(userimage.files[0]);
        file.onload = function (e) {
            $('.image-preview').attr('src', e.target.result);
        }
        $('.custom-file-label').html(userimage.files[0].name);
    }
};

function uppearBtn() {
    if ($('.check:checked').length > 0) {
        $('#delAll').removeClass('d-none');
        $('#delAll').html('Hapus {' + $('.check:checked').length + '} Data');
    } else {
        $('#delAll').addClass('d-none');
    }
};
$(document).on('click', '#delAll', function () {
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Menghapus item sebanyak  " + $('.check:checked').length + " !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            let val = [];
            $('.check:checked').each((i, e) => {
                val.push($(e).val());
            });
            $.ajax({
                type: "post",
                url: $(this).data('url'),
                data: {
                    id: val
                },
                dataType: "json",
                success: function (response) {
                    if (response.success) {
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        loadDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? --------------------------------------------------------------------------
// ? Dashboard Page Script
// ? --------------------------------------------------------------------------
$('.logout').click(function (e) {
    e.preventDefault();
    const href = $(this).attr('href');
    Swal.fire({
        title: 'Keluar!',
        text: "Apakah anda yakin tuk keluar dari dashboard ini!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjutkan',
        cancelButtonText: 'Tidak'
    }).then((result) => {
        if (result.value) {
            window.location.href = href;
        }
    })
});
// ? --------------------------------------------------------------------------
// ? User Page Script
// ? --------------------------------------------------------------------------
// ? Trigger untuk Add User
$('#add-form-user').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check form terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).attr('action'),
                data: new FormData(this),
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                cache: false,
                dataType: "json",
                beforeSend: function () {
                    $('#modal-add-user .overlay').removeClass('d-none');
                    $('#modal-add-user .overlay').addClass('d-flex');
                },
                complete: function () {
                    $('#modal-add-user .overlay').addClass('d-none');
                    $('#modal-add-user .overlay').removeClass('d-flex');
                },
                success: function (response) {
                    if (response.error) {
                        if (response.error.username) {
                            $('#modal-add-user #username').addClass('is-invalid');
                            $('#modal-add-user .errorUsername').html(response.error.username);
                        } else {
                            $('#modal-add-user #username').removeClass('is-invalid');
                            $('#modal-add-user #username').addClass('is-valid');
                        }
                        if (response.error.password) {
                            $('#modal-add-user #password').addClass('is-invalid');
                            $('#modal-add-user .errorPassword').html(response.error.password);
                        } else {
                            $('#modal-add-user #password').removeClass('is-invalid');
                            $('#modal-add-user #password').addClass('is-valid');
                        }
                        if (response.error.passwordverif) {
                            $('#modal-add-user #passwordverif').addClass('is-invalid');
                            $('#modal-add-user .errorPasswordverif').html(response.error.passwordverif);
                        } else {
                            $('#modal-add-user #passwordverif').removeClass('is-invalid');
                            $('#modal-add-user #passwordverif').addClass('is-valid');
                        }
                        if (response.error.displayname) {
                            $('#modal-add-user #displayname').addClass('is-invalid');
                            $('#modal-add-user .errorDisplayname').html(response.error.displayname);
                        } else {
                            $('#modal-add-user #displayname').removeClass('is-invalid');
                            $('#modal-add-user #displayname').addClass('is-valid');
                        }
                        if (response.error.userimage) {
                            $('#modal-add-user #userimage').addClass('is-invalid');
                            $('#modal-add-user .errorUserimage').html(response.error.userimage);
                        } else {
                            $('#modal-add-user #userimage').removeClass('is-invalid');
                            $('#modal-add-user #userimage').addClass('is-valid');
                        }
                    };
                    if (response.success) {
                        $('#modal-add-user form input').val('');
                        $('#modal-add-user form input').removeClass('is-valid');
                        $('#modal-add-user form input').removeClass('is-invalid');
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        $('#modal-add-user').modal('hide');
                        userDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Trigger untuk Add User

// ? /.Trigger untuk edit User
$('#edit-form-user').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check form terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).attr('action'),
                data: new FormData(this),
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                cache: false,
                dataType: "json",
                beforeSend: function () {
                    $('#modal-edit-user .overlay').removeClass('d-none');
                    $('#modal-edit-user .overlay').addClass('d-flex');
                },
                complete: function () {
                    $('#modal-edit-user .overlay').addClass('d-none');
                    $('#modal-edit-user .overlay').removeClass('d-flex');
                },
                success: function (response) {
                    if (response.error) {
                        if (response.error.username) {
                            $('#modal-edit-user .username').addClass('is-invalid');
                            $('#modal-edit-user .errorUsername').html(response.error.username);
                        } else {
                            $('#modal-edit-user .username').removeClass('is-invalid');
                            $('#modal-edit-user .username').addClass('is-valid');
                        }
                        if (response.error.displayname) {
                            $('#modal-edit-user .displayname').addClass('is-invalid');
                            $('#modal-edit-user .errorDisplayname').html(response.error.displayname);
                        } else {
                            $('#modal-edit-user .displayname').removeClass('is-invalid');
                            $('#modal-edit-user .displayname').addClass('is-valid');
                        }
                        if (response.error.userimage) {
                            $('#modal-edit-user .userimage').addClass('is-invalid');
                            $('#modal-edit-user .errorUserimage').html(response.error.userimage);
                        } else {
                            $('#modal-edit-user .userimage').removeClass('is-invalid');
                            $('#modal-edit-user .userimage').addClass('is-valid');
                        }
                    };
                    if (response.success) {
                        $('#modal-edit-user form input').val('');
                        $('#modal-edit-user form input').removeAttr('is-valid');
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        $('#modal-edit-user').modal('hide');
                        userDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Trigger untuk edit User
// ? trigger untuk detail User
$(document).on('click', '.detailuser', function () {
    $.ajax({
        url: '/user/detail_user/' + $(this).data('id'),
        dataType: 'json',
        beforeSend: function () {
            $('.overlay').removeClass('d-none');
            $('.overlay').addClass('d-flex');
        },
        complete: function () {
            $('.overlay').addClass('d-none');
            $('.overlay').removeClass('d-flex');
        },
        success: function (data) {
            $('.dId').html(data.id_user);
            $('.dUsername').html(data.username);
            $('.dDisplay').html(data.display_name);
            $('.dRole').html(data.name);
            $('.dImage').attr('src', '/dist/img/user/' + data.image);
            $('.dCreated').html(data.created_at);
            $('.dUpdated').html(data.updated_at);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
        }
    });
});
// ? Trigger Edit Users
$(document).on('click', '.edit-user', function () {
    $.ajax({
        url: '/user/detail_user/' + $(this).data('id'),
        dataType: 'json',
        beforeSend: function () {
            $('.overlay-modal-edit').removeClass('d-none');
            $('.overlay-modal-edit').addClass('d-flex');
            $('#modal-edit-user form input').val('');
            $('#modal-edit-user form input').removeClass('is-valid');
            $('#modal-edit-user form input').removeClass('is-invalid');
        },
        complete: function () {
            $('#modal-edit-user .overlay-modal-edit').addClass('d-none');
            $('#modal-edit-user .overlay-modal-edit').removeClass('d-flex');
        },
        success: function (data) {
            $('#modal-edit-user #id').val(data.id_user);
            $('#modal-edit-user .username').val(data.username);
            $('#modal-edit-user .image-preview').attr('src', '/dist/img/user/' + data.image);
            $('#modal-edit-user .displayname').val(data.display_name);
            $('#modal-edit-user .role').val(data.role_id);
        }
    })
});
// ? /.Trigger Edit User
$(document).on('click', '.del-user', function () {
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: '/user/remove_user',
                data: {
                    id: $(this).data('id')
                },
                dataType: "json",
                success: function (response) {
                    Swal.fire(
                        'Berhasil;!',
                        response.success.message,
                        'success'
                    )
                    userDisplay();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Trigger Edit User

// ? --------------------------------------------------------------------------
// ? Menu Page Script
// ? --------------------------------------------------------------------------

// ? Menu Active Checkbox
$(document).on('change', '.menu-active', function () {
    $.ajax({
        url: '/menus/change_active/',
        type: 'post',
        data: {
            id: $(this).data('id')
        },
        dataType: "json",
        beforeSend: function () {
            Swal.showLoading()
        },
        success: function (response) {
            Swal.fire(
                'Berhasil;!',
                response.success.message,
                'success'
            )
            menuDisplay();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
        }
    });
});
// ? ./Menu Active Checkbox

// ?  Trigger edit menu
$(document).on('click', '.edit-menu', function () {
    $.ajax({
        type: 'post',
        url: '/menus/get_single/',
        data: {
            id: $(this).data('id')
        },
        dataType: 'json',
        beforeSend: function () {
            $('#modal-edit-menu .overlay').removeClass('d-none');
            $('#modal-edit-menu .overlay').addClass('d-flex');
            $('#modal-edit-menu form input').val('');
            $('#modal-edit-menu form input').removeClass('is-valid');
            $('#modal-edit-menu form input').removeClass('is-invalid');
        },
        complete: function () {
            $('#modal-edit-menu .overlay').addClass('d-none');
            $('#modal-edit-menu .overlay').removeClass('d-flex');
        },
        success: function (data) {
            $('#modal-edit-menu .id').val(data.id_menu);
            $('#modal-edit-menu .menu').val(data.menu);
            $('#modal-edit-menu .url').val(data.url);
            $('#modal-edit-menu .icon').val(data.icon);
            $('#modal-edit-menu .noserial').val(data.no_serial);
        }
    })
});
// ?  /.Trigger edit menu

// ?  Trigger Delete menu
$(document).on('click', '.del-menu', function () {
    Swal.fire({
        title: 'Yakin?',
        text: 'Mau menghapus menu  ' + $(this).data('menu') + ' !',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjutkan',
        cancelButtonText: 'Tidak, Kembali'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                url: '/menus/remove_menu/',
                type: 'post',
                data: {
                    id: $(this).data('id'),
                    menu: $(this).data('menu')
                },
                beforeSend: function () {
                    Swal.showLoading()
                },
                dataType: 'json',
                success: function (response) {
                    Swal.fire(
                        'Berhasil;!',
                        response.success.message,
                        'success'
                    );
                    menuDisplay();
                }
            })
        }
    });
});
// ?  /.Trigger Delete menu

// ? Trigger Add Menu
$('#add-form-menu').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Anda yakin?',
        text: "Check terlebih dahulu, sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut',
        cancelButtonText: 'Tidak jadi',
    }).then((result) => {
        if (result.value) {
            if (result.value) {
                $.ajax({
                    type: "post",
                    url: $(this).attr('action'),
                    data: $(this).serialize(),
                    dataType: "json",
                    beforeSend: function () {
                        Swal.showLoading()
                    },
                    success: function (response) {
                        if (response.error) {
                            if (response.error.menu) {
                                $('#modal-add-menu .menu').addClass('is-invalid');
                                $('#modal-add-menu .errorMenu').html(response.error.menu);
                            } else {
                                $('#modal-add-menu .menu').removeClass('is-invalid');
                                $('#modal-add-menu .menu').addClass('is-valid');
                            }
                            if (response.error.url) {
                                $('#modal-add-menu .url').addClass('is-invalid');
                                $('#modal-add-menu .errorUrl').html(response.error.url);
                            } else {
                                $('#modal-add-menu .url').removeClass('is-invalid');
                                $('#modal-add-menu .url').addClass('is-valid');
                            }
                            if (response.error.noserial) {
                                $('#modal-add-menu .noserial').addClass('is-invalid');
                                $('#modal-add-menu .errorNoserial').html(response.error.noserial);
                            } else {
                                $('#modal-add-menu .noserial').removeClass('is-invalid');
                                $('#modal-add-menu .noserial').addClass('is-valid');
                            }
                        };
                        if (response.success) {
                            $('#modal-add-menu form input').val('');
                            $('#modal-add-menu form input').removeClass('is-valid');
                            $('#modal-add-menu form input').removeClass('is-invalid');
                            Swal.fire(
                                'Berhasil;!',
                                response.success.message,
                                'success'
                            )
                            $('#modal-add-menu').modal('hide');
                            menuDisplay();
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                    }
                });
            }
        }
    })

});
// ? ./Trigger Add Menu

// ? Trigger Edit Menu
$('#edit-form-menu').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Anda yakin?',
        text: "Check terlebih dahulu, sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut',
        cancelButtonText: 'Tidak jadi',
    }).then((result) => {
        if (result.value) {
            if (result.value) {
                $.ajax({
                    type: "post",
                    url: $(this).attr('action'),
                    data: $(this).serialize(),
                    dataType: "json",
                    beforeSend: function () {
                        Swal.showLoading()
                    },
                    success: function (response) {
                        if (response.error) {
                            if (response.error.menu) {
                                $('#modal-edit-menu .menu').addClass('is-invalid');
                                $('#modal-edit-menu .errorMenu').html(response.error.menu);
                            } else {
                                $('#modal-edit-menu .menu').removeClass('is-invalid');
                                $('#modal-edit-menu .menu').addClass('is-valid');
                            }
                            if (response.error.url) {
                                $('#modal-edit-menu .url').addClass('is-invalid');
                                $('#modal-edit-menu .errorUrl').html(response.error.url);
                            } else {
                                $('#modal-edit-menu .url').removeClass('is-invalid');
                                $('#modal-edit-menu .url').addClass('is-valid');
                            }
                            if (response.error.noserial) {
                                $('#modal-edit-menu .noserial').addClass('is-invalid');
                                $('#modal-edit-menu .errorNoserial').html(response.error.noserial);
                            } else {
                                $('#modal-edit-menu .noserial').removeClass('is-invalid');
                                $('#modal-edit-menu .noserial').addClass('is-valid');
                            }
                        };
                        if (response.success) {
                            $('#modal-edit-menu form input').val('');
                            $('#modal-edit-menu form input').removeClass('is-valid');
                            $('#modal-edit-menu form input').removeClass('is-invalid');
                            $('#modal-edit-menu form select').removeClass('is-valid');
                            $('#modal-edit-menu form select').removeClass('is-invalid');
                            Swal.fire(
                                'Berhasil;!',
                                response.success.message,
                                'success'
                            )
                            $('#modal-edit-menu').modal('hide');
                            menuDisplay();
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                    }
                });
            }
        }
    })

});
// ? Trigger Edit Menu


// ? ! --------------------------------------------------------------------------
// ? ! Sub Menu Page Script
// ? ! --------------------------------------------------------------------------


// ? Trigger Add Sub Menu
$('#add-form-submenu').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Anda yakin?',
        text: "Check terlebih dahulu, sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut',
        cancelButtonText: 'Tidak jadi',
    }).then((result) => {
        if (result.value) {
            if (result.value) {
                $.ajax({
                    type: "post",
                    url: $(this).attr('action'),
                    data: $(this).serialize(),
                    dataType: "json",
                    success: function (response) {
                        if (response.error) {
                            if (response.error.title) {
                                $('#modal-add-submenu .title').addClass('is-invalid');
                                $('#modal-add-submenu .errortitle').html(response.error.title);
                            } else {
                                $('#modal-add-submenu .title').removeClass('is-invalid');
                                $('#modal-add-submenu .title').addClass('is-valid');
                            }
                            if (response.error.url) {
                                $('#modal-add-submenu .url').addClass('is-invalid');
                                $('#modal-add-submenu .errorurl').html(response.error.url);
                            } else {
                                $('#modal-add-submenu .url').removeClass('is-invalid');
                                $('#modal-add-submenu .url').addClass('is-valid');
                            }
                            if (response.error.noserial) {
                                $('#modal-add-submenu .noserial').addClass('is-invalid');
                                $('#modal-add-submenu .errornoserial').html(response.error.noserial);
                            } else {
                                $('#modal-add-submenu .noserial').removeClass('is-invalid');
                                $('#modal-add-submenu .noserial').addClass('is-valid');
                            }
                            if (response.error.menuid) {
                                $('#modal-add-submenu .menuid').addClass('is-invalid');
                                $('#modal-add-submenu .errormenuid').html(response.error.menuid);
                            } else {
                                $('#modal-add-submenu .menuid').removeClass('is-invalid');
                                $('#modal-add-submenu .menuid').addClass('is-valid');
                            }
                        };
                        if (response.success) {
                            $('#modal-add-submenu form input').val('');
                            $('#modal-add-submenu form select').val('');
                            $('#modal-add-submenu form input').removeClass('is-valid');
                            $('#modal-add-submenu form input').removeClass('is-invalid');
                            $('#modal-add-submenu form select').removeClass('is-valid');
                            $('#modal-add-submenu form select').removeClass('is-invalid');
                            Swal.fire(
                                'Berhasil;!',
                                response.success.message,
                                'success'
                            )
                            $('#modal-add-submenu').modal('hide');
                            submenuDisplay();
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                    }
                });
            }
        }
    })

});
// ? ./Trigger Add Sub Menu

// ? Trigger Add Sub Menu
$('#edit-form-submenu').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Anda yakin?',
        text: "Check terlebih dahulu, sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut',
        cancelButtonText: 'Tidak jadi',
    }).then((result) => {
        if (result.value) {
            if (result.value) {
                $.ajax({
                    type: "post",
                    url: $(this).attr('action'),
                    data: $(this).serialize(),
                    dataType: "json",
                    success: function (response) {
                        if (response.error) {
                            if (response.error.title) {
                                $('#modal-edit-submenu .title').addClass('is-invalid');
                                $('#modal-edit-submenu .errortitle').html(response.error.title);
                            } else {
                                $('#modal-edit-submenu .title').removeClass('is-invalid');
                                $('#modal-edit-submenu .title').addClass('is-valid');
                            }
                            if (response.error.url) {
                                $('#modal-edit-submenu .url').addClass('is-invalid');
                                $('#modal-edit-submenu .errorurl').html(response.error.url);
                            } else {
                                $('#modal-edit-submenu .url').removeClass('is-invalid');
                                $('#modal-edit-submenu .url').addClass('is-valid');
                            }
                            if (response.error.noserial) {
                                $('#modal-edit-submenu .noserial').addClass('is-invalid');
                                $('#modal-edit-submenu .errornoserial').html(response.error.noserial);
                            } else {
                                $('#modal-edit-submenu .noserial').removeClass('is-invalid');
                                $('#modal-edit-submenu .noserial').addClass('is-valid');
                            }
                            if (response.error.menuid) {
                                $('#modal-edit-submenu .menuid').addClass('is-invalid');
                                $('#modal-edit-submenu .errormenuid').html(response.error.menuid);
                            } else {
                                $('#modal-edit-submenu .menuid').removeClass('is-invalid');
                                $('#modal-edit-submenu .menuid').addClass('is-valid');
                            }
                        };
                        if (response.success) {
                            $('#modal-edit-submenu form input').val('');
                            $('#modal-edit-submenu form input').removeClass('is-valid');
                            $('#modal-edit-submenu form input').removeClass('is-invalid');
                            $('#modal-edit-submenu form option').removeClass('is-valid');
                            $('#modal-edit-submenu form option').removeClass('is-invalid');
                            Swal.fire(
                                'Berhasil;!',
                                response.success.message,
                                'success'
                            )
                            $('#modal-edit-submenu').modal('hide');
                            submenuDisplay();
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                    }
                });
            }
        }
    })

});
// ? ./Trigger Add Sub Menu

// ? trigger addsubmenu
$('.add-submenu').click(function () {
    $('.modal-title').html('Tambah Sub Menu');
    $('#id').val('');
    $('#title').val('');
    $('#url').val('');
    $('#noserial').val(1);
    $('.submit').attr('name', 'addsubmenu');
    $('.btn-submit').html('Tambah');
});
// ? /.trigger addsubmenu

// ? trigger editsubmenu
$(document).on('click', '.edit-submenu', function () {
    $.ajax({
        url: '/submenus/get_single/',
        data: {
            id: $(this).data('id')
        },
        dataType: 'json',
        beforeSend: function () {
            $('#modal-edit-submenu .overlay').removeClass('d-none');
            $('#modal-edit-submenu .overlay').addClass('d-flex');
            $('#modal-edit-submenu form input').val('');
            $('#modal-edit-submenu form input').removeClass('is-valid');
            $('#modal-edit-submenu form input').removeClass('is-invalid');
            $('#modal-edit-submenu form select').removeClass('is-valid');
            $('#modal-edit-submenu form select').removeClass('is-invalid');
        },
        complete: function () {
            $('#modal-edit-submenu .overlay').addClass('d-none');
            $('#modal-edit-submenu .overlay').removeClass('d-flex');
        },
        success: function (data) {
            $('#modal-edit-submenu form .id').val(data.id_sub_menu);
            $('#modal-edit-submenu form .title').val(data.title);
            $('#modal-edit-submenu form .url').val(data.url);
            $('#modal-edit-submenu form .menuid').val(data.menu_id);
            $('#modal-edit-submenu form .noserial').val(data.no_serial);
        }
    })
});
// ? /.trigger editsubmenu


// ? trigger removsubemenu
$(document).on('click', '.del-submenu', function () {
    let text = $(this).data('text');
    Swal.fire({
        title: 'Kamu Yakin?',
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjutkan',
        cancelButtonText: 'Tidak,kembali'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                title: 'Loading!',
                html: 'Dalam proses menghapus.',
                onBeforeOpen: () => {
                    Swal.showLoading()
                }
            })
            $.ajax({
                url: '/submenus/remove_submenu',
                data: {
                    id: $(this).data('id')
                },
                dataType: 'json',
                success: function (response) {
                    Swal.fire({
                        title: 'Berhasil!',
                        text: response.success.message,
                        icon: 'success'
                    })
                    submenuDisplay();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            })
        }
    });
});
// ? /.trigger removesubmenu

// ? Sub Menu Active Checkbox
$(document).on('change', '.submenu-active', function () {
    Swal.fire({
        title: 'Loading!',
        html: 'Dalam proses mengaktifkan.',
        onBeforeOpen: () => {
            Swal.showLoading()
        }
    })
    $.ajax({
        url: '/submenus/change_active/',
        data: {
            id: $(this).data('id')
        },
        dataType: "json",
        success: function (response) {
            Swal.fire({
                title: 'Berhasil!',
                text: response.success.message,
                icon: 'success'
            })
            submenuDisplay();
        }
    });
});
// ? ./Sub Menu Active Checkbox

// ? --------------------------------------------------------------------------
// ? Role Page Script
// ? --------------------------------------------------------------------------
// ? Chek All checkbox
$(document).on('click', '#checkAll', function () {
    if (this.checked) {
        $('.check').each(function () {
            this.checked = true;
            uppearBtn();
        });
    } else {
        $('.check').each(function () {
            this.checked = false;
            uppearBtn();
        });
    }
});
// ? chek Checkbox
$(document).on('click', '.check', function () {
    if ($('.check:checked').length == $('.check').length) {
        $('#checkAll').prop('checked', true);
        uppearBtn();
    } else {
        $('#checkAll').prop('checked', false);
        uppearBtn();
    }
});
// ? triger Delete role
$(document).on('click', '.del-role', function () {
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Menghapus role " + $(this).data('name') + " !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).data('url'),
                data: {
                    id: $(this).data('id')
                },
                dataType: "json",
                success: function (response) {
                    if (response.success) {
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        roleDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? Trigger Add Role
$('#add-form-role').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check form terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).attr('action'),
                data: $(this).serialize(),
                dataType: "json",
                beforeSend: function () {
                    $('#modal-add-role .overlay').removeClass('d-none');
                    $('#modal-add-role .overlay').addClass('d-flex');
                },
                complete: function () {
                    $('#modal-add-role .overlay').addClass('d-none');
                    $('#modal-add-role .overlay').removeClass('d-flex');
                },
                success: function (response) {
                    if (response.error) {
                        if (response.error.name) {
                            $('#modal-add-role .name').addClass('is-invalid');
                            $('#modal-add-role .errorName').html(response.error.name);
                        } else {
                            $('#modal-add-role .name').removeClass('is-invalid');
                            $('#modal-add-role .name').addClass('is-valid');
                        }
                    };
                    if (response.success) {
                        $('#modal-add-role form input').val('');
                        $('#modal-add-role form input').removeClass('is-valid');
                        $('#modal-add-role form input').removeClass('is-invalid');
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        $('#modal-add-role').modal('hide');
                        roleDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })

});
$('#edit-form-role').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check form terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).attr('action'),
                data: $(this).serialize(),
                dataType: "json",
                beforeSend: function () {
                    $('#modal-edit-role .overlay').removeClass('d-none');
                    $('#modal-edit-role .overlay').addClass('d-flex');
                },
                complete: function () {
                    $('#modal-edit-role .overlay').addClass('d-none');
                    $('#modal-edit-role .overlay').removeClass('d-flex');
                },
                success: function (response) {
                    if (response.error) {
                        if (response.error.name) {
                            $('#modal-edit-role .name').addClass('is-invalid');
                            $('#modal-edit-role .errorName').html(response.error.name);
                        } else {
                            $('#modal-edit-role .name').removeClass('is-invalid');
                            $('#modal-edit-role .name').addClass('is-valid');
                        }
                    };
                    if (response.success) {
                        $('#modal-edit-role form input').val('');
                        $('#modal-edit-role form input').removeClass('is-valid');
                        $('#modal-edit-role form input').removeClass('is-invalid');
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        $('#modal-edit-role').modal('hide');
                        roleDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })

});
// ? Trigger Edit Roles
$(document).on('click', '.edit-role', function () {
    $('#modal-edit-role form input').removeClass('is-valid');
    $('#modal-edit-role form input').removeClass('is-invalid');
    $('.overlay-modal-edit').removeClass('d-none');
    $('.overlay-modal-edit').addClass('d-flex');
    $.ajax({
        url: '/role/single_role/' + $(this).data('id'),
        dataType: 'json',
        success: function (data) {
            $('#modal-edit-role .overlay-modal-edit').addClass('d-none');
            $('#modal-edit-role .overlay-modal-edit').removeClass('d-flex');
            $('#modal-edit-role #id').val(data.id_role);
            $('#modal-edit-role .name').val(data.name);
        }
    })
});
// ? /.Trigger Edit Roles
// ? Sub Menu Active Checkbox
$(document).on('change', '.role-active', function () {
    Swal.fire({
        title: 'Loading!',
        html: 'Dalam proses mengaktifkan.',
        onBeforeOpen: () => {
            Swal.showLoading()
        }
    })
    $.ajax({
        type: "post",
        url: '/role/change_active',
        data: {
            id: $(this).data('id')
        },
        dataType: "json",
        success: function (data) {
            Swal.fire({
                title: 'Berhasil!',
                text: data.success.message,
                icon: 'success'
            })
            roleDisplay();
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
        }
    });
});
// ? ./Sub Menu Active Checkbox

// ? --------------------------------------------------------------------------
// ? Role Access Page Script
// ? --------------------------------------------------------------------------

// ? Role Access Active Checkbox
$(document).on('click', '.roleaccess-active', function () {
    Swal.fire({
        title: 'Loading!',
        html: 'Dalam proses mengaktifkan.',
        onBeforeOpen: () => {
            Swal.showLoading()
        }
    })
    $.ajax({
        url: '/roleaccess/change_active/' + $(this).data('menuid') + '/' + $(this).data('roleid'),
        dataType: "html",
        success: function (data) {
            $('.role-access-data').html(data);
            Swal.fire({
                title: 'Berhasil!',
                text: 'Role Access Berhasil di ubah',
                icon: 'success'
            })
        }
    });
});
// ? ./Role Access Active Checkbox

// ? --------------------------------------------------------------------------
// ? Category Page Script
// ? --------------------------------------------------------------------------

// ? Category add form
$('#add-form-category').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check form terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).attr('action'),
                data: $(this).serialize(),
                dataType: "json",
                success: function (response) {
                    if (response.error) {
                        $('#modal-add-category input').addClass('is-valid');
                        $('#modal-add-category input').removeClass('is-invalid');
                        for (x in response.error) {
                            if (response.error[x]) {
                                $('#modal-add-category .' + x).addClass('is-invalid');
                                $('#modal-add-category .error' + x).html(response.error[x]);
                            }

                        }
                    };
                    if (response.success) {
                        $('#modal-add-category form input').val('');
                        $('#modal-add-category form input').removeClass('is-valid');
                        $('#modal-add-category form input').removeClass('is-invalid');
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        $('#modal-add-category').modal('hide');
                        categoryDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Category add form

// ? Category edit form
$('#edit-form-category').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check form terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).attr('action'),
                data: $(this).serialize(),
                dataType: "json",
                success: function (response) {
                    if (response.error) {
                        if (response.error.name) {
                            $('#modal-edit-category .name').addClass('is-invalid');
                            $('#modal-edit-category .errorname').html(response.error.name);
                        } else {
                            $('#modal-edit-category .name').addClass('is-valid');
                            $('#modal-edit-category .name').removeClass('is-invalid');
                        }
                    };
                    if (response.success) {
                        $('#modal-edit-category form input').val('');
                        $('#modal-edit-category form input').removeClass('is-valid');
                        $('#modal-edit-category form input').removeClass('is-invalid');
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        $('#modal-edit-category').modal('hide');
                        categoryDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Category edit form

// ? Triggert import Button
$('#import-form-category').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check File terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                type: "post",
                url: $(this).attr('action'),
                data: new FormData(this),
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                cache: false,
                dataType: "json",
                success: function (response) {
                    if (response.error) {
                        if (response.error.file) {
                            $('#modal-import-category .import').addClass('is-invalid');
                            $('#modal-import-category .errorimport').html(response.error.file);
                        } else {
                            $('#modal-import-category .import').addClass('is-valid');
                            $('#modal-import-category .import').removeClass('is-invalid');
                        }
                    };
                    if (response.success) {
                        $('#modal-import-category form input').val('');
                        $('#modal-import-category form input').removeClass('is-valid');
                        $('#modal-import-category form input').removeClass('is-invalid');
                        $('#modal-import-category .errorimport').html('Upload File');
                        Swal.fire({
                            title: 'Berhasil',
                            icon: 'success',
                            html: response.success.message,
                        })
                        $('#modal-import-category').modal('hide');
                        categoryDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Triggert import Button

// ? Triggert edit Button
$(document).on('click', '.edit-category', function () {
    const id = $(this).data('id');
    $('#modal-edit-category form input').removeClass('is-valid');
    $('#modal-edit-category form input').removeClass('is-invalid');
    $('#modal-edit-category .overlay').removeClass('d-none');
    $('#modal-edit-category .overlay').addClass('d-flex');
    $.ajax({
        url: '/category/get_single/',
        data: {
            id: $(this).data('id')
        },
        dataType: 'json',
        success: function (response) {
            $('#modal-edit-category .overlay').addClass('d-none');
            $('#modal-edit-category .overlay').removeClass('d-flex');
            $('#modal-edit-category #id').val(response.id_category);
            $('#modal-edit-category .name').val(response.name);

        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
        }
    })
});
// ? /.Triggert edit Button

// ? Triggert remove Button
$(document).on('click', '.del-category', function () {
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Menghapus Category " + $(this).data('name') + " !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).data('url'),
                data: {
                    id: $(this).data('id')
                },
                dataType: "json",
                success: function (response) {
                    if (response.success) {
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        categoryDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Triggert remove Button
// ? --------------------------------------------------------------------------
// ? Unit Page Script
// ? --------------------------------------------------------------------------

// ? Unit add form
$('#add-form-unit').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check form terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).attr('action'),
                data: $(this).serialize(),
                dataType: "json",
                success: function (response) {
                    if (response.error) {
                        $('#modal-add-unit input').addClass('is-valid');
                        $('#modal-add-unit input').removeClass('is-invalid');
                        for (x in response.error) {
                            if (response.error[x]) {
                                $('#modal-add-unit .' + x).addClass('is-invalid');
                                $('#modal-add-unit .error' + x).html(response.error[x]);
                            }
                        }
                    };
                    if (response.success) {
                        $('#modal-add-unit form input').val('');
                        $('#modal-add-unit form input').removeClass('is-valid');
                        $('#modal-add-unit form input').removeClass('is-invalid');
                        Swal.fire({
                            icon: 'success',
                            title: 'Berhasil',
                            html: response.success.message
                        })
                        $('#modal-add-unit').modal('hide');
                        unitDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Unit add form

// ? Unit edit form
$('#edit-form-unit').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check form terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).attr('action'),
                data: $(this).serialize(),
                dataType: "json",
                success: function (response) {
                    if (response.error) {
                        if (response.error.name) {
                            $('#modal-edit-unit .name').addClass('is-invalid');
                            $('#modal-edit-unit .errorname').html(response.error.name);
                        } else {
                            $('#modal-edit-unit .name').addClass('is-valid');
                            $('#modal-edit-unit .name').removeClass('is-invalid');
                        }
                    };
                    if (response.success) {
                        $('#modal-edit-unit form input').val('');
                        $('#modal-edit-unit form input').removeClass('is-valid');
                        $('#modal-edit-unit form input').removeClass('is-invalid');
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        $('#modal-edit-unit').modal('hide');
                        UnitDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Unit edit form

// ? Triggert import Button
$('#import-form-unit').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check File terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                type: "post",
                url: $(this).attr('action'),
                data: new FormData(this),
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                cache: false,
                dataType: "json",
                success: function (response) {
                    if (response.error) {
                        if (response.error.file) {
                            $('#modal-import-unit .import').addClass('is-invalid');
                            $('#modal-import-unit .errorimport').html(response.error.file);
                        } else {
                            $('#modal-import-unit .import').addClass('is-valid');
                            $('#modal-import-unit .import').removeClass('is-invalid');
                        }
                    };
                    if (response.success) {
                        $('#modal-import-unit form input').val('');
                        $('#modal-import-unit form input').removeClass('is-valid');
                        $('#modal-import-unit form input').removeClass('is-invalid');
                        $('#modal-import-unit .errorimport').html('Upload File');
                        Swal.fire({
                            title: 'Berhasil',
                            icon: 'success',
                            html: response.success.message,
                        })
                        $('#modal-import-unit').modal('hide');
                        UnitDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Triggert import Button

// ? Triggert edit Button
$(document).on('click', '.edit-unit', function () {
    const id = $(this).data('id');
    $('#modal-edit-unit form input').removeClass('is-valid');
    $('#modal-edit-unit form input').removeClass('is-invalid');
    $('#modal-edit-unit .overlay').removeClass('d-none');
    $('#modal-edit-unit .overlay').addClass('d-flex');
    $.ajax({
        url: '/unit/get_single/',
        data: {
            id: $(this).data('id')
        },
        dataType: 'json',
        success: function (response) {
            $('#modal-edit-unit .overlay').addClass('d-none');
            $('#modal-edit-unit .overlay').removeClass('d-flex');
            $('#modal-edit-unit #id').val(response.id_unit);
            $('#modal-edit-unit .name').val(response.name);

        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
        }
    })
});
// ? /.Triggert edit Button

// ? Triggert remove Button
$(document).on('click', '.del-unit', function () {
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Menghapus Unit " + $(this).data('name') + " !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).data('url'),
                data: {
                    id: $(this).data('id')
                },
                dataType: "json",
                success: function (response) {
                    if (response.success) {
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        UnitDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Triggert remove Button

// ? --------------------------------------------------------------------------
// ? Product Page Script
// ? --------------------------------------------------------------------------

// ? Product add form
$('#add-form-product').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check form terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).attr('action'),
                data: new FormData(this),
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                cache: false,
                dataType: "json",
                success: function (response) {
                    if (response.error) {
                        if (response.error.name) {
                            $('#modal-add-product .name').addClass('is-invalid');
                            $('#modal-add-product .errorname').html(response.error.name);
                        } else {
                            $('#modal-add-product .name').addClass('is-valid');
                            $('#modal-add-product .name').removeClass('is-invalid');
                        }
                        if (response.error.category) {
                            $('#modal-add-product .category').addClass('is-invalid');
                            $('#modal-add-product .errorcategory').html(response.error.category);
                        } else {
                            $('#modal-add-product .category').addClass('is-valid');
                            $('#modal-add-product .category').removeClass('is-invalid');
                        }
                        if (response.error.price) {
                            $('#modal-add-product .price').addClass('is-invalid');
                            $('#modal-add-product .errorprice').html(response.error.price);
                        } else {
                            $('#modal-add-product .price').addClass('is-valid');
                            $('#modal-add-product .price').removeClass('is-invalid');
                        }
                        if (response.error.unit) {
                            $('#modal-add-product .unit').addClass('is-invalid');
                            $('#modal-add-product .errorunit').html(response.error.unit);
                        } else {
                            $('#modal-add-product .unit').addClass('is-valid');
                            $('#modal-add-product .unit').removeClass('is-invalid');
                        }
                        if (response.error.barcode) {
                            $('#modal-add-product .barcode').addClass('is-invalid');
                            $('#modal-add-product .errorbarcode').html(response.error.barcode);
                        } else {
                            $('#modal-add-product .barcode').addClass('is-valid');
                            $('#modal-add-product .barcode').removeClass('is-invalid');
                        }
                        if (response.error.image) {
                            $('#modal-add-product .image').addClass('is-invalid');
                            $('#modal-add-product .errorimage').html(response.error.image);
                        } else {
                            $('#modal-add-product .image').addClass('is-valid');
                            $('#modal-add-product .image').removeClass('is-invalid');
                        }
                    };
                    if (response.success) {
                        $('#modal-add-product form input').val('');
                        $('#modal-add-product form input').removeClass('is-valid');
                        $('#modal-add-product form input').removeClass('is-invalid');
                        $('#modal-add-product .errorimage').html('Pilih Gambar');
                        Swal.fire({
                            icon: 'success',
                            title: 'Berhasil',
                            html: response.success.message
                        })
                        $('#modal-add-product').modal('hide');
                        productDisplay();
                    }
                    console.log(response);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Product add form

// ? Product edit form
$('#edit-form-product').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check form terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).attr('action'),
                data: new FormData(this),
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                cache: false,
                dataType: "json",
                success: function (response) {
                    if (response.error) {
                        if (response.error.name) {
                            $('#modal-edit-product .name').addClass('is-invalid');
                            $('#modal-edit-product .errorname').html(response.error.name);
                        } else {
                            $('#modal-edit-product .name').addClass('is-valid');
                            $('#modal-edit-product .name').removeClass('is-invalid');
                        }
                        if (response.error.category) {
                            $('#modal-edit-product .category').addClass('is-invalid');
                            $('#modal-edit-product .errorcategory').html(response.error.category);
                        } else {
                            $('#modal-edit-product .category').addClass('is-valid');
                            $('#modal-edit-product .category').removeClass('is-invalid');
                        }
                        if (response.error.price) {
                            $('#modal-edit-product .price').addClass('is-invalid');
                            $('#modal-edit-product .errorprice').html(response.error.price);
                        } else {
                            $('#modal-edit-product .price').addClass('is-valid');
                            $('#modal-edit-product .price').removeClass('is-invalid');
                        }
                        if (response.error.unit) {
                            $('#modal-edit-product .unit').addClass('is-invalid');
                            $('#modal-edit-product .errorunit').html(response.error.unit);
                        } else {
                            $('#modal-edit-product .unit').addClass('is-valid');
                            $('#modal-edit-product .unit').removeClass('is-invalid');
                        }
                        if (response.error.barcode) {
                            $('#modal-edit-product .barcode').addClass('is-invalid');
                            $('#modal-edit-product .errorbarcode').html(response.error.barcode);
                        } else {
                            $('#modal-edit-product .barcode').addClass('is-valid');
                            $('#modal-edit-product .barcode').removeClass('is-invalid');
                        }
                        if (response.error.image) {
                            $('#modal-edit-product .image').addClass('is-invalid');
                            $('#modal-edit-product .errorimage').html(response.error.image);
                        } else {
                            $('#modal-edit-product .image').addClass('is-valid');
                            $('#modal-edit-product .image').removeClass('is-invalid');
                        }
                    };
                    if (response.success) {
                        $('#modal-edit-product form input').val('');
                        $('#modal-edit-product form input').removeClass('is-valid');
                        $('#modal-edit-product form input').removeClass('is-invalid');
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        $('#modal-edit-product').modal('hide');
                        productDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Product edit form

// ? Triggert import Button
$('#import-form-product').submit(function (e) {
    e.preventDefault();
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Check File terlebih dahulu sebelum submit!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                type: "post",
                url: $(this).attr('action'),
                data: new FormData(this),
                enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                cache: false,
                dataType: "json",
                success: function (response) {
                    if (response.error) {
                        if (response.error.file) {
                            $('#modal-import-product .import').addClass('is-invalid');
                            $('#modal-import-product .errorimport').html(response.error.file);
                        } else {
                            $('#modal-import-product .import').addClass('is-valid');
                            $('#modal-import-product .import').removeClass('is-invalid');
                        }
                    };
                    if (response.success) {
                        $('#modal-import-product form input').val('');
                        $('#modal-import-product form input').removeClass('is-valid');
                        $('#modal-import-product form input').removeClass('is-invalid');
                        $('#modal-import-product .errorimport').html('Upload File');
                        Swal.fire({
                            title: 'Berhasil',
                            icon: 'success',
                            html: response.success.message,
                        })
                        $('#modal-import-product').modal('hide');
                        productDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Triggert import Button

// ? Triggert edit Button
$(document).on('click', '.edit-product', function () {
    const id = $(this).data('id');
    $('#modal-edit-product form input').removeClass('is-valid');
    $('#modal-edit-product form input').removeClass('is-invalid');
    $('#modal-edit-product .overlay').removeClass('d-none');
    $('#modal-edit-product .overlay').addClass('d-flex');
    $.ajax({
        url: '/product/get_single/',
        data: {
            id: $(this).data('id')
        },
        dataType: 'json',
        success: function (response) {
            $('#modal-edit-product .overlay').addClass('d-none');
            $('#modal-edit-product .overlay').removeClass('d-flex');
            $('#modal-edit-product #id').val(response.id_product);
            $('#modal-edit-product .name').val(response.name);
            $('#modal-edit-product .category').val(response.category_id);
            $('#modal-edit-product .unit').val(response.unit_id);
            $('#modal-edit-product .price').val(response.price);
            $('#modal-edit-product .barcode').val(response.barcode);
            $('#modal-edit-product .image-preview').attr('src', '/dist/img/product/' + response.image);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
        }
    })
});
// ? /.Triggert edit Button

// ? Triggert remove Button
$(document).on('click', '.del-product', function () {
    Swal.fire({
        title: 'Apa kamu yakin?',
        text: "Menghapus Produk " + $(this).data('name') + " !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Lanjut!',
        cancelButtonText: 'Tidak jadi!'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "post",
                url: $(this).data('url'),
                data: {
                    id: $(this).data('id')
                },
                dataType: "json",
                success: function (response) {
                    if (response.success) {
                        Swal.fire(
                            'Berhasil;!',
                            response.success.message,
                            'success'
                        )
                        productDisplay();
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError)
                }
            });
        }
    })
});
// ? /.Triggert remove Button