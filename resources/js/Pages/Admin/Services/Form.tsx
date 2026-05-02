import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import type { PageProps } from '@/types';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

interface Service {
    id: number;
    title: string;
    description: string;
    price_range: string;
    image_path: string;
}

export default function Form({ auth, service }: PageProps<{ service?: Service }>) {
    const isEdit = !!service;

    const { data, setData, post, put, errors, processing } = useForm({
        title: service?.title || '',
        description: service?.description || '',
        price_range: service?.price_range || '',
        image: null as File | null,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (isEdit) {
            // Because we might send a file, we can't use standard PUT. 
            // We use POST and fake PUT via _method to handle FormData correctly in Laravel.
            post(route('services.update', service.id), {
                data: {
                    _method: 'PUT',
                }
            });
        } else {
            post(route('services.store'));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{isEdit ? 'Edit Layanan' : 'Tambah Layanan'}</h2>}
        >
            <Head title={isEdit ? 'Edit Layanan' : 'Tambah Layanan'} />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} encType="multipart/form-data">
                                <div className="mb-4">
                                    <InputLabel htmlFor="title" value="Judul Layanan" />
                                    <TextInput
                                        id="title"
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('title', e.target.value)}
                                    />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="description" value="Deskripsi" />
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full h-32"
                                        onChange={(e) => setData('description', e.target.value)}
                                    />
                                    <InputError message={errors.description} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="price_range" value="Rentang Harga (opsional)" />
                                    <TextInput
                                        id="price_range"
                                        type="text"
                                        name="price_range"
                                        value={data.price_range}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('price_range', e.target.value)}
                                    />
                                    <InputError message={errors.price_range} className="mt-2" />
                                </div>

                                <div className="mb-6">
                                    <InputLabel htmlFor="image" value="Gambar Layanan" />
                                    <input
                                        id="image"
                                        type="file"
                                        name="image"
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('image', e.target.files?.[0] || null)}
                                    />
                                    <InputError message={errors.image} className="mt-2" />
                                    {isEdit && service.image_path && (
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Gambar saat ini:</p>
                                            <img src={`/${service.image_path}`} alt="Current" className="h-32 object-cover rounded mt-1" />
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-end">
                                    <PrimaryButton className="ml-4" disabled={processing}>
                                        {isEdit ? 'Update' : 'Simpan'}
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
