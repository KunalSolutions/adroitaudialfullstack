import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CheckoutSteps from '@components/CheckoutSteps';
import SelectInput from '@components/FormInput/SelectInput';
import TextInput from '@components/FormInput/TextInput';
import countries from '@data/countries';
import { saveShippingAddress } from '@slices/cartSlice';

const ShippingScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;

	const [address, setAddress] = useState(shippingAddress?.address || '');
	const [city, setCity] = useState(shippingAddress?.city || '');
	const [postalCode, setPostalCode] = useState(
		shippingAddress?.postalCode || ''
	);
	const [country, setCountry] = useState(shippingAddress?.country || '');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('ADding shipping address');
		console.table({ address, city, postalCode, country });
		dispatch(saveShippingAddress({ address, city, postalCode, country }));
		navigate('/payment');
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-12">

  <div className="mx-auto max-w-6xl px-4">

    {/* Checkout Steps */}
    <div className="mb-12 flex justify-center">
      <CheckoutSteps step1 step2 />
    </div>

    <div className="grid lg:grid-cols-12 gap-10">

      {/* Left Side */}
      <div className="lg:col-span-5 hidden lg:block">

        <div className="sticky top-24 overflow-hidden rounded-3xl bg-[#232466] p-10 text-white">

          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            Secure Checkout
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight">
            Shipping
            <br />
            Information
          </h2>

          <p className="mt-5 text-slate-300 leading-7">
            Enter your delivery details to ensure fast and secure shipment of
            your professional audio equipment.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span>100% Secure Checkout</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span>Fast Delivery Across India</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-400">✓</span>
              <span>Trusted Audio Brands</span>
            </div>

          </div>

        </div>

      </div>

      {/* Form Side */}
      <div className="lg:col-span-7">

        <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-xl border border-slate-100">

          <div className="mb-8">

            <h1 className="mt-0 text-4xl font-black text-[#232466]">
              Shipping Address
            </h1>

            <p className="mt-2 text-slate-500">
              Please fill in your shipping information below.
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <TextInput
              id="address"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <div className="grid md:grid-cols-2 gap-6">

              <TextInput
                id="city"
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <TextInput
                id="postalCode"
                label="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />

            </div>

            <SelectInput
              id="country"
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              options={countries}
            />

            <button
              type="submit"
              className="mt-4 flex h-14 w-full items-center justify-center rounded-2xl bg-[#EF5622] text-lg font-bold text-white transition-all duration-300 hover:bg-[#232466]"
            >
              Continue To Payment
            </button>

          </form>

        </div>

      </div>

    </div>

  </div>

</div>
	);
};

export default ShippingScreen;
