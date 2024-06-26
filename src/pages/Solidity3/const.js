export const code = {
mathnocontrol:
`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract UncheckedMath {
    function add(uint256 x, uint256 y) external pure returns (uint256) {
        // 22291 gas
        // return x + y;

        // 22103 gas
        unchecked {
            return x + y;
        }
    }

    function sub(uint256 x, uint256 y) external pure returns (uint256) {
        // 22329 gas
        // return x - y;

        // 22147 gas
        unchecked {
            return x - y;
        }
    }

    function sumOfCubes(uint256 x, uint256 y) external pure returns (uint256) {
        // Wrap complex math logic inside unchecked
        unchecked {
            uint256 x3 = x * x * x;
            uint256 y3 = y * y * y;

            return x3 + y3;
        }
    }
}`,
asvar:
`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AssemblyVariable {
    function yul_let() public pure returns (uint256 z) {
        assembly {
            // Language used for assembly is called Yul
            // Local variables
            let x := 123
            z := 456
        }
    }
}`,
ascond:
`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AssemblyIf {
    function yul_if(uint256 x) public pure returns (uint256 z) {
        assembly {
            // if condition = 1 { code }
            // no else
            // if 0 { z := 99 }
            // if 1 { z := 99 }
            if lt(x, 10) { z := 99 }
        }
    }

    function yul_switch(uint256 x) public pure returns (uint256 z) {
        assembly {
            switch x
            case 1 { z := 10 }
            case 2 { z := 20 }
            default { z := 0 }
        }
    }
}`,
asloop:
`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AssemblyLoop {
    function yul_for_loop() public pure returns (uint256 z) {
        assembly {
            for { let i := 0 } lt(i, 10) { i := add(i, 1) } { z := add(z, 1) }
        }
    }

    function yul_while_loop() public pure returns (uint256 z) {
        assembly {
            let i := 0
            for {} lt(i, 5) {} {
                i := add(i, 1)
                z := add(z, 1)
            }
        }
    }
}`,
aserror:
`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AssemblyError {
    function yul_revert(uint256 x) public pure {
        assembly {
            // revert(p, s) - end execution
            //                revert state changes
            //                return data mem[p…(p+s))
            if gt(x, 10) { revert(0, 0) }
        }
    }
}`,
asmath:
`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AssemblyMath {
    function yul_add(uint256 x, uint256 y) public pure returns (uint256 z) {
        assembly {
            z := add(x, y)
            if lt(z, x) { revert(0, 0) }
        }
    }

    function yul_mul(uint256 x, uint256 y) public pure returns (uint256 z) {
        assembly {
            switch x
            case 0 { z := 0 }
            default {
                z := mul(x, y)
                if iszero(eq(div(z, x), y)) { revert(0, 0) }
            }
        }
    }

    // Round to nearest multiple of b
    function yul_fixed_point_round(uint256 x, uint256 b)
        public
        pure
        returns (uint256 z)
    {
        assembly {
            // b = 100
            // x = 90
            // z = 90 / 100 * 100 = 0, want z = 100
            // z := mul(div(x, b), b)

            let half := div(b, 2)
            z := add(x, half)
            z := mul(div(z, b), b)
            // x = 90
            // half = 50
            // z = 90 + 50 = 140
            // z = 140 / 100 * 100 = 100
        }
    }
}`
}