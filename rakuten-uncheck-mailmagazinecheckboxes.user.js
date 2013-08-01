// ==UserScript==
// @name            Rakuten: Uncheck "want mail magazines" checkboxes by default
// @namespace       http://www.sfo.jp/
// @description     Uncheck "want mail magazines" checkboxes in Rakuten ordering page
// @include         https://*.step.rakuten.co.jp/*
// @include         https://*.travel.rakuten.co.jp/*
// @grant	    none
// ==/UserScript==

// Copyright (c) 2007-2013 SATOH Fumiyasu @ OSS Technology Corp., Japan
//               <https://GitHub.com/fumiyas/>
//               <http://www.OSSTech.co.jp/>
//
// License: GNU General Public License version 2
// Date: 2013-08-02, since 2007-01-06

(function() {
  var RakutenUncheckMailMagazinesCheckBoxes =
  {
    do: function()
    {
      var input = document.getElementsByTagName( "input" );
      for (var i = 0; i < input.length; i++) {
	name = input[i].getAttribute("name");
	id = input[i].getAttribute("id");
	type = input[i].getAttribute("type");
	if (!name || !type || type != "checkbox") {
	  continue;
	}
	if (name == "rmail_check" || name == "shop_rating_check" || name == "newsId" || id.lastIndexOf("mailMgz", 0) == 0 || id.lastIndexOf("mailNws", 0) == 0 || name == "bookmark_check") {
	  //input[i].setAttribute("checked", false);
	  input[i].checked = false;
	}
      }
    }
  }

  RakutenUncheckMailMagazinesCheckBoxes.do();
})();

